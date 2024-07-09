import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
// import useMenu from "../../../hooks/useMenu";
import useAxious from "../../../hooks/useAxious";
import useCarts from "../../../hooks/useCarts";

const Cart = () => {
  // const [cart] = useCarts();
  const [cart, refetch] = useCarts();
  const axiousSecoure = useAxious();

  const totalprice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          refetch();
          axiousSecoure.delete(`carts/${id}`).then((res) => {
            if (res.data.deleteCount > 0) {
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };
  return (
    <div>
      <div className="flex gap-5 my-5 justify-evenly text-center">
        <h2 className="text-3xl">Items {cart.length}</h2>
        <h2 className="text-3xl">Total price :$ {totalprice}</h2>
        <button className="btn btn-primary">pay</button>
      </div>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-orange-400 ">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      {/* <div className="font-bold">{item.name}</div> */}
                    </div>
                  </div>
                </td>
                <td className="font-bold">
                  {item.name}
                  <br />
                </td>
                <td>{item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-xs bg-red-400"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}

            {/* row 2 */}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Cart;
