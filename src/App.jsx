import React, { useState } from 'react';
import input from "./assets/input.svg";
import instagram from "./assets/instagram.svg";
import telegram from "./assets/telegram.svg";
import facebook from "./assets/facebook.svg";
import github from "./assets/githubb.svg";
import profil from "./assets/Ellipse 1.png"
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [tel, setTel] = useState()
  const [count, setCount] = useState()
  const [adress, setAdress] = useState()
  const [desc, setDesc] = useState()
  const [country, setCountry] = useState()
  const [city, setCity] = useState()

  const [data, setData] = useState([])

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+998\d{9}$/;


  function validate() {
    if (name.length < 3) {
      alert('kompaniya nomi kamida 3ta belgidan iborat bolishi kerak')
      return false
    }

    const isValidEmail = emailRegex.test(email);
    if (!isValidEmail) {
      alert("Email noto'g'ri kiritilgan!");
      return false
    }


    if (!phoneRegex.test(tel)) {
      alert("Telefon raqami noto'g'ri formatda!");
      return false;
    }


    if (count < 30) {
      alert('ishchi count kam kamida 30 ta bolishi kerak')
      return false
    }


    if (!country || !city) {
      alert('city yoki country tanlanmagan')
      return false
    }

    if (adress.length < 10) {
      alert('yashash joyi kamida 10ta belgidan iborat bolishi kerak')
      return false
    }

    if (desc.length < 3) {
      alert('desc kamida 4ta belgidan iborat bolishi kerak')
      return false
    }


    setName('')
    setEmail('')
    setDesc('')
    setAdress('')
    setTel('')
    setCount(0)
    setCity('tosh')
    setCountry('uzb')
    return true;






  }


  function handleClick(e) {
    e.preventDefault()

    const isValid = validate()

    if (!isValid) {
      return
    }

    const user = {
      name: name,
      email: email,
      tel, tel,
      count: count,
      adress: adress,
      desc: desc,
      country: country,
      city: city,
      id: Date.now()
    }

    const copied = [...data]
    copied.push(user)
    setData(copied)


  }



  return (
    <div className='mt-20 '>
      <div className="container rounded-[2%] m-auto w-[778px] bg-amber-50">
        <div className="register pt-[32px] ml-[38px] w-[702px]">
          <h1 className="text-[32px] font-medium mb-[16px]">Kompaniya ma’lumotlari</h1>
          <p className="text-slate-400 mb-[32px]">Kompaniya haqidagi ma’lumotlarni kiriting</p>
          <div className="flex items-center">
            <img className='mb-[20px]' src={profil} alt="" />
            <a className='mb-3 ml-4 text-blue-600' href="#">Yuklash</a>
          </div>

          <form>
            <label>
              Kompaniya nomi <span className="text-red-400">*</span>
            </label>
            <input
              value={name}
              onChange={(e) => { setName(e.target.value) }}
              className="w-[702px] mb-5 mt-[8px] border border-gray-300 rounded-[17px] p-[18px] bg-amber-50 outline-1"
              placeholder="Kompaniya nomi"
              type="text"
            />

            <label>
              Email <span className="text-red-400">*</span>
            </label>
            <input
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              className="w-[702px] mb-5 mt-[8px] border border-gray-300 rounded-[17px] p-[18px] bg-amber-50"
              type="email"
              placeholder="Email"
            />

            <label>
              Telefon raqami <span className="text-red-400">*</span>
            </label>
            <input
              value={tel}
              onChange={(e) => { setTel(e.target.value) }}
              className="w-[702px] mb-5 mt-[8px] border border-gray-300 rounded-[17px] p-[18px] bg-amber-50"
              type="tel"
              placeholder="UZ +998"
            />

            <p>
              Linklar <span className="text-red-400">*</span>
            </p>

            <div className="flex gap-2">
              <img onClick={openModal} src={input} alt="" />
              <img onClick={openModal} src={instagram} alt="" />
              <img onClick={openModal} src={telegram} alt="" />
              <img onClick={openModal} src={facebook} alt="" />
              <img onClick={openModal} src={github} alt="" />
            </div>

            <div className="flex w-[702px] justify-between">
              <div className="">
                <p className='mt-5'>
                  country <span className="text-red-400">*</span>
                </p>
                <select
                  value={country}
                  onChange={(e) => { setCountry(e.target.value) }}
                  className="w-[341px] mb-5 mt-[8px] border border-gray-300 rounded-[17px] p-[18px] bg-amber-50">
                  <option>uzb</option>
                  <option>ru</option>
                  <option>eng</option>
                </select>
              </div>
              <div className="">
                <p className='mt-5'>
                  city <span className="text-red-400">*</span>
                </p>
                <select
                  value={city}
                  onChange={(e) => { setCity(e.target.value) }}
                  className="w-[341px] mb-5 mt-[8px] border border-gray-300 rounded-[17px] p-[18px] bg-amber-50">
                  <option >tosh</option>
                  <option>moskva</option>
                  <option>dubai</option>
                </select>
              </div>
            </div>

            <label>
              Yashash joyi <span className="text-red-400">*</span>
            </label>
            <input
              value={adress}
              onChange={(e) => { setAdress(e.target.value) }}
              className="w-[702px] mb-5 mt-[8px] border border-gray-300 rounded-[17px] p-[18px] bg-amber-50 outline-1"
              placeholder="Yashash joyi"
              type="text"
            />

            <label>
              Hodimlar count <span className="text-red-400">*</span>
            </label>
            <input
              value={count}
              onChange={(e) => { setCount(e.target.value) }}
              className="w-[702px] mb-5 mt-[8px] border border-gray-300 rounded-[17px] p-[18px] bg-amber-50 outline-1"
              placeholder="Hodimlari"
              type="number"
            />

            <label>
              desc <span className="text-red-400">*</span>
            </label>
            <textarea
              value={desc}
              onChange={(e) => { setDesc(e.target.value) }}
              className="w-[702px] mb-5 mt-[8px] border border-gray-300 rounded-[17px] p-[18px] bg-amber-50 outline-1"
              placeholder="desc"
            ></textarea>


            <div className="w-[702px] pb-10 m-auto flex justify-between">
              <button className='bg-gray-500 text-gray-200 text-[18px] p-3 w-[120px] rounded-md'>Bekor qilish</button>
              <button className='bg-blue-500 text-gray-200 text-[18px] p-3 w-[120px] rounded-md' onClick={handleClick}>Saqlash</button>
            </div>

          </form>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-[500px] p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-[24px] font-medium mb-[16px]">Link qo'shish</h2>
            <input
              type="text"
              placeholder="Link kiriting"
              className="w-full border border-gray-300 rounded-[12px] p-[12px] mb-[16px] outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex justify-end gap-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Bekor qilish
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Saqlash
              </button>
            </div>
          </div>
        </div>
      )}
 <div className="flex mt-12 m-auto gap-10 w-[1000px]">
      {
        data.length > 0 && data.map(function (v, i) {
          return (
           
              <div className="wraper w-[450px] bg-cream px-6 py-4 rounded-md shadow-md border border-gray-200">
            <h1 key={i} className="mb-2 text-lg font-medium text-gray-800">Nomi: <span className="font-normal">{v.name}</span></h1>
            <h1 key={i} className="mb-2 text-lg font-medium text-gray-800">Email: <span className="font-normal">{v.email}</span></h1>
            <h1 key={i} className="mb-2 text-lg font-medium text-gray-800">Telefon raqami: <span className="font-normal">{v.tel}</span></h1>
            <h1 key={i} className="mb-2 text-lg font-medium text-gray-800">adress: <span className="font-normal">{v.adress}</span></h1>
            <h1 key={i} className="mb-2 text-lg font-medium text-gray-800">Ishchi count: <span className="font-normal">{v.count}</span></h1>
            <h1 key={i} className="mb-2 text-lg font-medium text-gray-800">country: <span className="font-normal">{v.country}</span></h1>
            <h1 key={i} className="mb-2 text-lg font-medium text-gray-800">city: <span className="font-normal">{v.city}</span></h1>
            <h1 key={i} className="mb-2 text-lg font-medium text-gray-800">desc: <span className="font-normal">{v.desc}</span></h1>
          </div>
           
          
          )
        })
        
      }
      </div>
    </div>
  );
}

export default App;
