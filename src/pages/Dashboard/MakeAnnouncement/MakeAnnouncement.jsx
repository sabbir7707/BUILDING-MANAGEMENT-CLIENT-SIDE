import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";



const MakeAnnouncement = () => {
    const {user} = useAuth();
    console.log(user);

    const { register, handleSubmit, reset } = useForm();
   
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url


            // now send the menu item data to the server with the image url
            const menuItem = {
               email: user.email,
               photo: user.photoURL,
               Name: user.displayName,
                title: data.title,
                description: data.description,

            }
            // 
            const menuRes = await axiosSecure.post('/announcement', menuItem);
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        
       
    };

    return (
        <div>
            
            <div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Title*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Title"
                            {...register('title', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className=" mb-10">
                        {/* category */}
                        {/* recipe details */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                        </div>
                    </div>



                    <button className="btn">
                        Make annancoment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MakeAnnouncement;