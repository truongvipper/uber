//Yêu cầu lấy thông tin người dùng nhập vào (loaiXe, soKm, thoiGianCho)
//Khi người dùng bấm nút tính tiền => tính tiền dựa trên công thức đề bài
var loaiXe = 'uberX';
var bienNe='111111111';
var bienDay='222222';


document.querySelector('#uberX').onclick = function () {
    loaiXe = 'uberX';
}

document.querySelector('#uberSUV').onclick = function () {
    loaiXe = 'uberSUV';
}

document.querySelector('#uberBlack').onclick = function () {
    loaiXe = 'uberBlack';
}

document.querySelector('button.contact100-form-btn').onclick = function () {
    // alert(123)
    //lấy thông số km, và thời gian chờ
    var soKm = document.querySelector('#soKM').value;
    var thoiGianCho = document.querySelector('#thoiGianCho').value;
    console.log('loaiXe', loaiXe);
    console.log('soKm', soKm);
    console.log('thoiGianCho', thoiGianCho);
    //Sử dụng if else hoặc switch case theo loaiUber để tính tiền
    var tongTien = 0;
    switch (loaiXe) {
        case 'uberX': {
            if (soKm <= 1) {
                //Tiền taxi
                tongTien += 8000;

            } else if (soKm > 1 && soKm < 21) {
                //Tính tiền taxi
                tongTien += 8000 + (soKm - 1) * 12000;

            } else if (soKm >= 21) {
                //tiền taxi
                tongTien += 8000 + (19 * 12000) + (soKm - 20) * 10000;
            }
            //tiền chờ 
            tongTien += thoiGianCho * 2000;
        }; break;
        case 'uberSUV': {
            if (soKm <= 1) {
                //Tiền taxi
                tongTien += 9000;
            } else if (soKm > 1 && soKm < 21) {
                //Tính tiền taxi
                tongTien += 9000 + (soKm - 1) * 14000;
            } else if (soKm >= 21) {
                //tiền taxi
                tongTien += 9000 + (19 * 14000) + (soKm - 20) * 12000;
            }
            //tiền chờ 
            tongTien += thoiGianCho * 3000;
        }; break;
        case 'uberBlack': {
            if (soKm <= 1) {
                //Tiền taxi
                tongTien += 10000;
            } else if (soKm > 1 && soKm < 21) {
                //Tính tiền taxi
                tongTien += 10000 + (soKm - 1) * 16000;
            } else if (soKm >= 21) {
                //tiền taxi
                tongTien += 10000 + (19 * 16000) + (soKm - 20) * 14000;
            }
            //tiền chờ 
            tongTien += thoiGianCho * 4000;
        }; break;
        default: { }; break;
    }
    console.log('tongTien',tongTien);

    //Hiển thị div chứa số tiền
    document.querySelector('#divThanhTien').style.display = 'block';
    //In số tiền lên giao diện đồng thời 
    document.querySelector('.xuatTien').innerHTML = tongTien.toLocaleString();

}

