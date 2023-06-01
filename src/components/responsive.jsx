const Responsive=()=>{
    return(<>
          <div className="max-w-6xl mx-auto bg-green-600">
            <h1>Grid system</h1>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-3">
                <div className="bg-yellow-600">
                    di1
                </div>
                <div className="bg-pink-600">
                    2
                </div>
                <div className="bg-yellow-600">
                    di1
                </div>
            </div>

            <h1>Flex</h1>
            <div className="flex flex-wrap">
                <div className=" w-full md:w-2/4 bg-yellow-600">
                    di1 ajsjhash
                </div>
                <div className=" w-full md:w-1/4 bg-pink-600">
                    2
                </div>
                <div className="  w-full md:w-1/4 bg-yellow-600">
                    di1
                </div>
            </div>
          </div>
    </>)
}

export default Responsive