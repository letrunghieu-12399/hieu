function check() {
    var check = true;
    var reg = new RegExp('^[0-9]+$')
    var name = document.getElementById("fullname").value;
    if (name == null || name == "") {
        document.getElementById("errName").innerHTML = "Hãy điền tên của bạn";
        document.getElementById("error").innerHTML = "Hãy lựa chọn thông tin đặt sân";
        check = false;
    } else if (name.length > 50) {
        document.getElementById("errName").innerHTML = "Tên không dài quá 50 ký tự";
        check = false;
    } else {
        document.getElementById("errName").innerHTML = "";
        document.getElementById("error").innerHTML = "";
    }
    var lienhe = document.getElementById("contact").value;
    if (lienhe == null || lienhe == "") {
        check = false;
        document.getElementById("errContact").innerHTML = "Hãy nhập số điện thoại của bạn";
        document.getElementById("error").innerHTML = "Hãy lựa chọn thông tin đặt sân";
    } else if (lienhe.length > 50 || reg.test(lienhe) == false) {
        check = false;
        document.getElementById("errContact").innerHTML = "Số điện thoại chỉ nhập số nguyên dương và không dài quá 50 ký tự";
    } else {
        document.getElementById("errContact").innerHTML = "";
        document.getElementById("error").innerHTML = "";
    }
    var khunggio = document.getElementById("khunggio").value;
    if (khunggio == null || khunggio == "") {
        check = false;
        document.getElementById("errKhunggio").innerHTML = "Hãy chọn khung giờ muốn đặt sân";
        document.getElementById("error").innerHTML = "Hãy lựa chọn thông tin đặt sân";
    } else {
        document.getElementById("errKhunggio").innerHTML = "";
        document.getElementById("error").innerHTML = "";
    }
    var time = document.getElementById("time").value;
    if (time == null || time == "") {
        check = false;
        document.getElementById("errTime").innerHTML = "Hãy nhập số giờ muốn đặt sân";
        document.getElementById("error").innerHTML = "Hãy lựa chọn thông tin đặt sân";
    } else if (time < 0 || reg.test(time) == false) {
        check = false;
        document.getElementById("errTime").innerHTML = "Chỉ được phép nhập số dương"
    } else {
        document.getElementById("errTime").innerHTML = "";
        document.getElementById("error").innerHTML = "";
    }
    var nguoichoi = document.getElementById("soluong").value;
    if (nguoichoi == null || nguoichoi == "") {
        check = false;
        document.getElementById("errSoluong").innerHTML = "Hãy nhập số người chơi";
        document.getElementById("error").innerHTML = "Hãy lựa chọn thông tin đặt sân";
    } else if (nguoichoi < 0 || reg.test(nguoichoi) == false) {
        check = false;
        document.getElementById("errSoluong").innerHTML = "Chỉ được phép nhập số nguyên dương";
    } else {
        document.getElementById("errSoluong").innerHTML = "";
        document.getElementById("error").innerHTML = "";
    }
    var sodoi = document.getElementById("sodoi").value;
    if (sodoi == null || sodoi == "") {
        check = false;
        document.getElementById("errsodoi").innerHTML = "Hãy nhập số đội chơi";
        document.getElementById("error").innerHTML = "Hãy lựa chọn thông tin đặt sân";
    } else if (sodoi < 2 || reg.test(sodoi) == false) {
        check = false;
        document.getElementById("errsodoi").innerHTML = "Chỉ được phép nhập số nguyên dương";
    } else {
        document.getElementById("errsodoi").innerHTML = "";
        document.getElementById("error").innerHTML = "";
    }


    var check
    if (check == true) {
        document.getElementById("true").innerHTML = "Click vào đây để đặt sân";
    }
    if (check) {
        tinhtien(khunggio, time, sodoi);
    }
}

function tinhtien(khunggio, time, sodoi) {
    var tiensan = khunggio * time;
    var tiendongphuc = 0;
    var tiendongphuc = document.getElementById("dongphuc").checked;
    if (tiendongphuc) {
        var tiendongphuc = sodoi * document.getElementById("dongphuc").value;
    }
    var tientrongtai = 0;
    var tientrongtai = document.getElementById("trongtai").checked;
    if (tientrongtai) {
        var tientrongtai = time * document.getElementById("trongtai").value;
    }
    var tong = tiensan + tiendongphuc + tientrongtai;
    document.getElementById("tongtien").value = tong;

}

function kiemtrakhunggio() {
    let v = document.getElementById("khunggio").value;
    console.log(v);

    if (v == -1) {
        document.getElementById("errKhunggio").innerHTML = "Hãy chọn khung giờ muốn đặt sân";
        document.getElementById("error").innerHTML = "Hãy lựa chọn thông tin đặt sân";

    } else {
        document.getElementById("errKhunggio").innerHTML = "";
        document.getElementById("error").innerHTML = "";
    }
}