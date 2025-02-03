const { ObjectId } = require("mongodb"); 

module.exports = {
  async up(db) {
    await db.collection("books").insertMany([
      {
        _id: new ObjectId("679fc0e8cea1e879737985d0"),
        title: "The Fault in Our Stars",
        author: "John Green",
        genre: "Romance, Fiction, Contemporary, Realistic",
        publicationBy: "John Green",
        price: 15,
        currency: "USD",
        description: "Despite the tumor-shrinking medical miracle that has bought her a few …",
        imageUrl: "/public/image-1738522856133-392778193.JPG",
        createdAt: new Date("2025-02-02T19:00:56.203Z"),
        updatedAt: new Date("2025-02-02T19:00:56.203Z"),
        __v: 0,
      },
      {
        _id: new ObjectId("679fc17ecea1e879737985df"),
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classics, Fiction, Historical Fiction",
        publicationBy: "Historical Gradfen",
        price: 8,
        currency: "USD",
        description: "The unforgettable novel of a",
        imageUrl: "/public/image-1738523005954-31223329.JPG",
        createdAt: new Date("2025-02-02T19:03:26.149Z"),
        updatedAt: new Date("2025-02-02T19:03:26.149Z"),
        __v: 0,
      },
      {
        _id: new ObjectId("679fc1ebcea1e879737985e6"),
        title: "The Lightning Thief",
        author: "Rick Riordan",
        genre: "Fantasy, Young Adult, Mythology",
        publicationBy: "Percy Jackson",
        price: 6,
        currency: "USD",
        description: "Alternate cover for this ISBN can be found herePercy Jackson is a good…",
        imageUrl: "/public/image-1738523114788-582932110.JPG",
        createdAt: new Date("2025-02-02T19:05:15.104Z"),
        updatedAt: new Date("2025-02-02T19:05:15.104Z"),
        __v: 0,
      },
      {
        _id: new ObjectId("679fc2a3cea1e879737985ed"),
        title: "Harry Potter",
        author: "J.K. Rowling",
        genre: "Childrens, Middle Grade, Audiobook",
        publicationBy: "J.K. Rowling",
        price: 20,
        currency: "USD",
        description: "Harry Potter, along with his best friends, Ron and Hermione,",
        imageUrl: "/public/image-1738523299466-878218823.JPG",
        createdAt: new Date("2025-02-02T19:08:19.984Z"),
        updatedAt: new Date("2025-02-02T19:08:54.883Z"),
        __v: 0,
      },
      {
        _id: new ObjectId("67a011639404569a4589e32a"),
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy, Classics, Fiction, Adventure, Young Adult, High Fantasy",
        publicationBy: "Transform",
        price: 15,
        currency: "USD",
        description: "One choice can transform you—or it can destroy you. But every choice h…",
        imageUrl: "/public/image-1738543459468-78891099.JPG",
        createdAt: new Date("2025-02-03T00:44:19.493Z"),
        updatedAt: new Date("2025-02-03T00:44:19.493Z"),
        __v: 0,
      },
      {
        _id: new ObjectId("67a012389404569a4589e333"),
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Classics, Fiction, Romance, Historical Fiction, Literature",
        publicationBy: "Jane Austen",
        price: 14,
        currency: "USD",
        description: "Since its immediate success in 1813, Pride and Prejudice has remained …",
        imageUrl: "/public/image-1738543672057-678966068.JPG",
        createdAt: new Date("2025-02-03T00:47:52.063Z"),
        updatedAt: new Date("2025-02-03T00:47:52.063Z"),
        __v: 0,
      },
    ]);
    console.log("Migration UP: Inserted book data");
  },

  async down(db) {
    await db.collection("books").deleteMany({
      _id: {
        $in: [
          new ObjectId("679fc0e8cea1e879737985d0"),
          new ObjectId("679fc17ecea1e879737985df"),
          new ObjectId("679fc1ebcea1e879737985e6"),
          new ObjectId("679fc2a3cea1e879737985ed"),
          new ObjectId("67a011639404569a4589e32a"),
          new ObjectId("67a012389404569a4589e333"),
        ],
      },
    });
    console.log("Migration DOWN: Removed book data");
  },
};
