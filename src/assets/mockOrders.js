export const mockOrders = [
    {
    orderId: "ORD-2024-001",
    orderDate: "2024-03-05",
    totalAmount: 75.25,
    status: "Delivered",
    items: [
        { productId: "P101", name: "T-Shirt", quantity: 2, price: 20.00 },
        { productId: "P102", name: "Jeans", quantity: 1, price: 35.25 },
    ],
    shippingAddress: {
        city: "Anytown",
        country: "USA"
    }
    },
    {
    orderId: "ORD-2024-002",
    orderDate: "2024-03-10",
    totalAmount: 120.00,
    status: "Shipped",
    items: [
        { productId: "P201", name: "Sneakers", quantity: 1, price: 80.00 },
        { productId: "P203", name: "Socks", quantity: 3, price: 10.00 },
    ],
    shippingAddress: {
        city: "Somecity",
        country: "Canada"
    }
    },
]