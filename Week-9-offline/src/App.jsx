
import { useState, useEffect } from "react";

// 1. Main App component
function App() {
  return (
    <div style={{ background: "#dfe6e9", minHeight: "100vh", padding: 20 }}>
      <h2>React Practice - Week 9</h2>

      <h3>1. Post Component</h3>
      <PostComponent />

      <hr />

      <h3>2. State and Re-rendering</h3>
      <ToggleMessage />

      <hr />

      <h3>3. Dynamic Post Creation</h3>
      <PostsDemo />

      <hr />

      <h3>4. Notification Counter</h3>
      <NotificationDemo />

      <hr />

      <h3>5. Props</h3>
      <Greeting name="Harkirat" />
      <Greeting name="Anmol" />

      <hr />

      <h3>6. useEffect and Intervals</h3>
      <EffectDemo />

      <hr />

      <h3>7. API Fetching and Dynamic Tabs</h3>
      <TodoTabs />
    </div>
  );
}

// 2. Post Component
function PostComponent() {
  const style = {
    width: 250,
    backgroundColor: "white",
    borderRadius: 10,
    border: "1px solid gray",
    padding: 20
  };

  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src="https://assets-cms.b-cdn.net/branding/responsive/100xdevs-profile-128.webp"
          alt="100xdevs profile"
          style={{ width: 30, height: 30, borderRadius: 20 }}
        />

        <div style={{ fontSize: 10, marginLeft: 10 }}>
          <b>100xdevs</b>
          <div>23,888 followers</div>
          <div>12m</div>
        </div>
      </div>

      <div style={{ fontSize: 12, marginTop: 10 }}>
        What to know how to win big? Check out how these folks won $600 in bounties.
      </div>
    </div>
  );
}

// 3. State and Re-rendering
function ToggleMessage() {
  const [notificationCount, setNotificationCount] = useState(0);

  function increment() {
    setNotificationCount(current => current + 1);
  }

  return (
    <div>
      <button onClick={increment}>Increase Count</button>
      <p>{notificationCount}</p>
    </div>
  );
}

// 4. Dynamic Post Creation
function PostsDemo() {
  const [posts, setPosts] = useState([]);

  function addPost() {
    setPosts(currentPosts => [
      ...currentPosts,
      {
        id: Date.now(),
        name: "Harkirat",
        subtitle: "100000 followers",
        time: "2m ago",
        image: "https://assets-cms.b-cdn.net/branding/responsive/100xdevs-profile-128.webp",
        description: "What to know how to win big? Check out how these folks won $600 in bounties."
      }
    ]);
  }

  return (
    <div>
      <button onClick={addPost}>Add Post</button>

      {posts.map(post => (
        <div key={post.id} style={{ marginTop: 10 }}>
          <b>{post.name}</b>
          <div>{post.subtitle}</div>
          <div>{post.time}</div>
          <img src={post.image} alt="Profile" width={30} />
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
}

// 5. Notification Counter
function NotificationDemo() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <div>{count}</div>

      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/001/505/138/small/notification-bell-icon-free-vector.jpg"
        alt="Notification bell"
        width={40}
      />

      <button onClick={() => setCount(current => current + 1)}>
        Increase the count
      </button>
    </div>
  );
}

// 6. Props
function Greeting(props) {
  return <div>Hi there {props.name}</div>;
}

// 7. useEffect and Intervals
function EffectDemo() {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    const firstInterval = setInterval(() => {
      setCount(current => current + 1);
    }, 5000);

    const secondInterval = setInterval(() => {
      setCount2(current => current - 1);
    }, 8000);

    // Clean up intervals when component unmounts
    return () => {
      clearInterval(firstInterval);
      clearInterval(secondInterval);
    };
  }, []);

  useEffect(() => {
    console.log("The count has been updated to", count, count2);
  }, [count, count2]);

  return (
    <div>
      {count} {count2}
    </div>
  );
}

// 8. API Fetching and Dynamic Tabs
function TodoTabs() {
  const [currentTab, setCurrentTab] = useState(1);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/" + currentTab,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const json = await response.json();
        setTabData(json);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => controller.abort();
  }, [currentTab]);

  return (
    <div>
      {[1, 2, 3, 4].map(number => (
        <button
          key={number}
          onClick={() => setCurrentTab(number)}
          style={{
            color: currentTab === number ? "red" : "black",
            margin: 5
          }}
        >
          Todo #{number}
        </button>
      ))}

      <br />

      {loading
        ? "Loading..."
        : error
          ? error
          : tabData.title}
    </div>
  );
}

export default App;
