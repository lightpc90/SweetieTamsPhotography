import Link from "next/link";

const NewBlog = () => {
  return (
    <div className={`my-10 px-3`}>
      <Link href='/admin/create_new_post' className="bg-[#BD8E25] py-1 px-2 text-white font-semibold">
        ADD NEW BLOG
      </Link>
    </div>
  );
};

export default NewBlog;
