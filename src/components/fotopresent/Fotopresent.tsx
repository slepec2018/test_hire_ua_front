function Fotopresent() {
  const randomImageNumber = Math.floor(Math.random() * 5) + 1;

  return (
    <img className="w-[430px] hidden md:block rounded-tr-2xl rounded-br-2xl" src={`/images/${randomImageNumber}.jpg`} alt="foto-present" />
  );
}

export default Fotopresent;