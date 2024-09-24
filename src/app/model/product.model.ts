export interface Product {
    id: string;          // Unique identifier for the product
    name: string;        // Name of the product
    price: number;       // Price of the product
    description: string; // Description of the product
    category: string;    // Category the product belongs to
    imageUrl: string;    // URL of the product image
    quantity: number;

}
export const MOCK_PRODUCTS: Product[] = [
    { id: '1', name: 'Tur Dal', price: 100, description: '1Kg', category: 'Category 1', imageUrl: '../assets/image.jfif', quantity: 1 },
    { id: '2', name: 'Fortune Soya Chunks', price: 137, description: '1Kg', category: 'Category 2', imageUrl: '../assets/image1.jfif', quantity: 1 },
    { id: '3', name: 'Dalda Mustrad Oil', price: 300, description: '1L', category: 'Category 3', imageUrl: '../assets/image2.jfif', quantity: 1 },
    { id: '4', name: 'Safe harvest Peanut', price: 137, description: '500g', category: 'Category 3', imageUrl: '../assets/image3.jfif', quantity: 1 }
];
