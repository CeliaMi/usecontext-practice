import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import { useForm } from "react-hook-form";
import { handlerLoginUser } from "../middleware/userHandlers";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm()

  const handleForm = async (loginUser) => {
    try {
      const res = await handlerLoginUser(loginUser)
      if (res.data.sesiondata.token) {
        //codeamos aquí✍
        console.log('Logged in!')
        navigate("/home");
      }

    } catch (error) {
      console.log('Login failed.');
    }
  }

  return (
          <section className='lg:w-4/5 md:w-2/3 mx-auto'>
            <h3 className="text-purple-400 tracking-widest font-medium title-font mb-4">Login</h3>
            <form onSubmit={handleSubmit(handleForm)} className='flex flex-wrap -m-2' >
              <div className=' w-full'>
                <div className='relative'>
                  <label htmlFor="writer" className='eading-7 text-sm text-gray-400'>Email:</label>
                  <input type="email" autoComplete="on" name="email" id="email" {...register("email", {
                    required: true
                  })} className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-5' />
                  {errors.email?.type === 'required' && <Alert text={"El campo email es requerido"} />}
                  <label htmlFor="writer" className='eading-7 text-sm text-gray-400'>Contraseña:</label>
                  <input type="password" autoComplete="on" name="password" id="password" {...register("password", {
                    required: true
                  })} className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-5' />
                  {errors.password?.type === 'required' && <Alert text={"El campo password es requerido"} />}
                  <button type="submit" className=' text-white bg-indigo-500 border-0 py-2 w-full focus:outline-none hover:bg-indigo-600 rounded text-lg mt-3 mb-5'> Login</button>
                </div>

              </div>
            </form>
          </section>


  )
}

export default Login