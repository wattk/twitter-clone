function Profile({ img, size, onClick }) {
  return (
    <div
      className="bg-gray-300 rounded-full cursor-pointer"
      style={{ width: `${size}` }}
      onClick={onClick}
    >
      <img src={img} alt="profile" className="rounded-full" />
    </div>
  );
}

export default Profile;
