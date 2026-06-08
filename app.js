async function uploadVideo(){

  const file =
    document.getElementById("video").files[0];

  if(!file){
    alert("Pilih video dulu");
    return;
  }

  document.getElementById("status")
    .innerHTML = "Uploading...";

  const formData = new FormData();

  formData.append("video", file);

  try{

    const response = await fetch(
      "https://API-KAMU.onrender.com/process",
      {
        method:"POST",
        body:formData
      }
    );

    const result = await response.json();

    document.getElementById("status")
      .innerHTML =
      "Selesai : " + result.output;

  }catch(err){

    document.getElementById("status")
      .innerHTML = "Error";

  }

}
