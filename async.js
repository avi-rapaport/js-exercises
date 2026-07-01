//5
try {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
} catch {
  (err) => console.log(err);
}

//6
async function done() {
  return "done";
}
console.log(await done());

//7
async function square(num) {
  return await (num * num);
}

console.log(await square(5));

//14
async function twoCalls(url1, url2) {
  try {
    const user = await fetch(url1);
    if (!user.ok) throw new Error("HTTP error:", user.status);
    const userData = await user.json();

    const post = await fetch(url2);
    if (!post.ok) throw new Error("HTTP error:", user.status);
    const postData = await post.json();

    return { user: userData, post: postData };
  } catch (err) {
    console.log("Error:", err.message);
    throw err;
  }
}

const calls = await twoCalls(
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/posts/1",
);

console.log(calls.user);
console.log(calls.post);

//15 //16
async function apiFetch(call1, call2, call3) {
  try {
    const api1 = fetch(call1);
    const api2 = fetch(call2);
    const api3 = fetch(call3);

    const responses = await Promise.all([api1, api2, api3]);

    for (const res of responses) {
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
    }
    const data = await Promise.all([
      responses[0].json(),
      responses[1].json(),
      responses[2].json(),
    ]);

    return data;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
}

const apiCalls = await apiFetch(
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/todos/1",
);
console.log(apiCalls[0]);
console.log(apiCalls[1]);
console.log(apiCalls[2]);

//18
async function fetchLoop(urlsArr) {
  const data = [];

  for (const url of urlsArr) {
    try {
      const res = await fetch(url);

      if (!res.ok) throw new Error(`HTTP e rror: ${res.status}`);

      const resData = await res.json();

      data.push(resData);
    } catch (err) {
      console.log(err.message);
    }
  }
  return data;
}

const apiCalls = await fetchLoop([
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/todos/1",
]);

for (const api of apiCalls) {
  console.log(api);
}

//19
async function fetchLoop(urlsArr) {
  const data = [];
  try {
    const responses = await Promise.all(urlsArr.map((url) => fetch(url)));
    for (const res of responses) {
      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }
      const resData = await res.json();
      data.push(resData);
    }
  } catch (err) {
    console.log(err);
  }
  return data;
}

const apiCalls = await fetchLoop([
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/todos/1",
]);

for (const api of apiCalls) {
  console.log(api);
}
