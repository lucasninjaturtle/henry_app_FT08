import React, {useState} from "react";
import axios from "axios";

function Dashboard() {
    const [dataFile, setDataFile] = useState("")

    const handleChange = (e) =>{
        let file = e.target.files;
        let reader = new FileReader();

        reader.readAsDataURL(file[0]);

        reader.onload = (e) =>{
            setDataFile(e.target.result)
            // console.log('file data', e.target.result)
        }
    }
    console.log(dataFile)
    const handleSubmit = (e) =>{
        e.preventDefault();

        axios.post('http://localhost:3000/user',{dataFile},{
        headers:{

            "Content-disposition" : "attachment; filename=[yourFileName]" ,
            "Content-Type" : "text/csv"
        }},)
        .then(res =>{
            console.log(res)
        })
        
    }

  return (
      <form onSubmit={handleSubmit}>

    <div class="py-20 h-screen px-2" >
    <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
        <div class="md:flex">
            <div class="w-full">
                <div class="p-4 border-b-2"> <span class="text-lg font-bold text-gray-600">Cargar documento</span> </div>
                <div class="p-3">
                    {/* <div class="mb-2"> <span class="text-sm">Title</span> <input type="text" class="h-12 px-3 w-full border-gray-200 border rounded focus:outline-none focus:border-gray-300"/> </div> */}
                    <div class="mb-2"> 
                        <div class="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                            <div class="absolute">
                                <div class="flex flex-col items-center "> <i class="fa fa-cloud-upload fa-3x text-gray-200"></i> <span class="block text-gray-400 font-normal">Adjunta tus archivos aqui</span> <span class="block text-gray-400 font-normal">or</span> <span class="block text-blue-400 font-normal">Browse files</span> </div>
                            </div> <input type="file" class="h-full w-full opacity-0" name="file" onChange={handleChange}/>
                        </div>
                        <div class="flex justify-between items-center text-gray-400"> <span>Cargar solo archivos tipo .csv</span> </div>
                    </div>
                    <div class="mt-3 text-center pb-3" > <button type='submit' class="w-full h-12 text-lg w-32 bg-blue-600 rounded text-white hover:bg-blue-700">Cargar</button> </div>
                </div>
            </div>
        </div>
    </div>
</div>
      </form>
  );
}

export default Dashboard;
