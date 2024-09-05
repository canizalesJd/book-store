function ProductCard({book}) {
    return (
        <a href="#" className="group block hover:text-blue-600">
            <img
            src={book.image_url}
            alt=""
            className="w-full rounded object-cover h-[25rem]"
            />

        <div className="mt-3">
            <h3 className="font-lg text-gray-900 group-hover:underline group-hover:underline-offset-4  truncate">
            {book.title}
            </h3>

            <p className="mt-1 text-sm text-gray-700">${book.price.replace("Â£", "")}</p>
        </div>
        </a>
    );
}
export default ProductCard