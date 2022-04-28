function Spinner() {
  
  return (
    <div className="flex items-center justify-center flex-col h-full">
        <div style = {{borderTopColor:'transparent'}} className="w-16 h-16 border-4 border-red-400 border-solid rounded-full animate-spin">
        </div>
        <p>Gimme a second...</p>
    </div>
  )
}

export default Spinner