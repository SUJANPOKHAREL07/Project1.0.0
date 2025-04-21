import Cards from "../component/card";
import Crousel from "../component/crousel";
import Footer from "../component/footer";
const Home = () => {
  return (
    <>
      <div className="bg-[#fff5f8]">
      <Crousel/>
        <div className=" flex justify-center p-8 space-x-1">
        <label className="bg-red-300 text-white font-bold text-3xl rounded-md  w-[3rem] flex justify-center">
          T
        </label>
        <label className="bg-red-300 text-white font-bold text-3xl rounded-md  w-[3rem] flex justify-center">
          O
        </label>
        <label className="bg-red-300 text-white font-bold text-3xl rounded-md  w-[3rem] flex justify-center">
          P
        </label>
        <label className="bg-red-300 text-white font-bold text-3xl rounded-md  w-[3rem] flex justify-center">
          -
        </label>
        <label className="bg-red-300 text-white font-bold text-3xl rounded-md  w-[3rem] flex justify-center">
          D
        </label>
        <label className="bg-red-300 text-white font-bold text-3xl rounded-md  w-[3rem] flex justify-center">
          E
        </label>
        <label className="bg-red-300 text-white font-bold text-3xl rounded-md  w-[3rem] flex justify-center">
          S
        </label>
        <label className="bg-red-300 text-white font-bold text-3xl rounded-md  w-[3rem] flex justify-center">
          T
        </label>
        <label className="bg-red-300 text-white font-bold text-3xl rounded-md  w-[3rem] flex justify-center">
          I
        </label>
        <label className="bg-red-300 text-white font-bold text-3xl rounded-md  w-[3rem] flex justify-center">
          N
        </label>
        <label className="bg-red-300 text-white font-bold text-3xl rounded-md  w-[3rem] flex justify-center">
          A
        </label>
        <label className="bg-red-300 text-white font-bold text-3xl rounded-md  w-[3rem] flex justify-center">
          T
        </label>
        <label className="bg-red-300 text-white font-bold text-3xl rounded-md  w-[3rem] flex justify-center">
          I
        </label>
        <label className="bg-red-300 text-white font-bold text-3xl rounded-md  w-[3rem] flex justify-center">
          O
        </label>
        <label className="bg-red-300 text-white font-bold text-3xl rounded-md  w-[3rem] flex justify-center">
          N
        </label>
      </div>
      
        <Cards />
        <Footer />
      </div>
    </>
  );
};
export default Home;
