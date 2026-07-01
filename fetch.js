// //1
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data.title));

// //2
// fetch("https://jsonplaceholder.typicode.com/notfound")
//   .then((res) => {
//     console.log("status:", res.status, res.statusText);

//     if (!res.ok) {
//       throw new Error(`HTTP error: ${res.status}`);
//     }
//   })
//   .catch((err) => console.log(err.message));

// //3
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((posts) => posts.forEach((posts) => console.log(posts.title)));

// //4
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: { "content-type": "application/json" },
//   body: JSON.stringify({
//     title: "כותרת חדשה",
//     body: "תוכן הפוסט",
//     userId: 1,
//   }),
// })
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(res.status);
//     }
//     return res.json().then((data) => ({ status: res.status, bodyData: data }));
//   })
//   .then((created) => {
//     console.log("status:", created.status);
//     console.log(created.bodyData);
//   });

//5
const getUserById = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
    (res) => {
      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }
      return res.json();
    },
  );
};

//6
const getPostById = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
    (res) => {
      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }
      return res.json();
    },
  );
};

// getPostById(1)
//   .then((post) => {
//     return getUserById(post.userId).then((user) => {
//       return { name: user.name, title: post.title };
//     });
//   })
//   .then((result) =>
//     console.log(`username: ${result.name}\npostTitle: ${result.title}`),
//   )
//   .catch((err) => console.log(err.message));

// //7
// const todo = fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
//   res.json(),
// );

// Promise.all([getUserById(1), getPostById(1), todo]).then(
//   ([user, post, todo]) => {
//     console.log("user:", user);
//     console.log("post:", post);
//     console.log("todo:", todo);
//   },
// );

//8
const controller = new AbortController();
const signal = controller.signal;

fetch("https://jsonplaceholder.typicode.com/posts", {
  signal: signal, // עכשיו ה-fetch הזה מקשיב לשלט הרחוק שלנו
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => {
    // אם לחצו על הביטול, השגיאה תגיע ישירות לפה!
    if (err.name === "AbortError") {
      console.log("הבקשה בוטלה כי הזמן עבר!");
    } else {
      console.log("שגיאת רשת אחרת:", err.message);
    }
  });
