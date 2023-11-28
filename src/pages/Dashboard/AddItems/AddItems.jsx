import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
console.log(image_hosting_key);
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(res.data );
        
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                apartment_no: data.apartment_no,
                floor_no: data.floor_no,
                rent: parseFloat(data.rent),
                block_name: data. block_name,
                image: res.data.data.display_url
            }
            // 
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
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
        }
        console.log( 'with image url', res.data); 
    };

    return (
        <div>
            <SectionTitle heading="add an item" subHeading="What's new?" ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Apartment No*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Apartment No"
                            {...register('apartment_no', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Floor No*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="floor_no"
                                {...register('floor_no', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">block Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="block Name"
                            {...register('block_name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>

                       <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Rent*</span>
                            </label>
                            <input
                                type="number"
                                 placeholder="Price"
                                {...register('rent', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* recipe details */}
                   {/*  <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>
 */}
                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Add Item 
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;