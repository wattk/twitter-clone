import ThreadItem from "./ThreadItem";

function ThreadList({ data }) {
  return (
    <div>
      {data.map((item, index) => (
        <ThreadItem key={index} item={item} />
      ))}
    </div>
  );
}

export default ThreadList;
