const menuItem = {
    title:data.title,
    description: data.description,
  
}
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