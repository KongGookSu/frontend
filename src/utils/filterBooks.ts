export interface IBook {
    id: number;
    title: string;
    duration: string;
    rating: number;
    pages: number;
    description: string;
    imageUrl: string;
}

export interface IBookData {
    place: string;
    books: IBook[];
}

export const filterBooks = (books: IBook[], searchTerm: string): IBook[] => {
    return books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()));
};
