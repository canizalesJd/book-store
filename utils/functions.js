const getCategories = async () => {
    const response = await fetch('/data/books.json');
    const data = await response.json();
    return Object.keys(data);
}

const getAllBooks = async () => {
    const response = await fetch('/data/books.json');
    const data = response.json()
    return data
}

const getBooksByCategory = async (categoryName) => {
    const response = await fetch('/data/books.json');
    const category = categoryName.toLowerCase().replace(" ", "_");
    if (category in response) {
        return response[category];
    } else {
        throw new Error("Category not found");
    }
}

export {getCategories, getAllBooks, getBooksByCategory}