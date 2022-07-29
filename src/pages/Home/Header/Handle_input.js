export const handle_input = (local,nameLocal)=>{
    const localExists = local.find((item) => item.toUpperCase() === nameLocal.toUpperCase()); //kiểm tra xem trong bảng gợi ý tồn tại tên thành phố chưa
   
    if (localExists) {
        //nếu có phần tử bị trùng
        const localSHow = local.filter((iteam) => iteam != localExists); //nếu tồn tại thì xóa cái tồn tại đi  rồi đưa cái mới vào cuối mảng vì ở bên inputSuggeest duyệt từ đầu đến cuối
        if (localSHow.length > 4) {
          localSHow.shift();
        }
        localStorage.setItem(
          "locations",
          JSON.stringify([...localSHow, nameLocal])
        );
      } else {
        //nếu không có phần tử bị trùng

        if (local.length > 4) {
          local.shift();
        }
        localStorage.setItem(
          "locations",
          JSON.stringify([...local, nameLocal])
        );
      }
}