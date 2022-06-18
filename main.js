//Cau 1
document.getElementById("btnSort").onclick = function () {
    var a, b, c, x;
    a = document.getElementById("a").value * 1;
    b = document.getElementById("b").value * 1;
    c = document.getElementById("c").value * 1;
  
    if (a > b) {
      x = a;
      a = b;
      b = x;
    }
    if (a > c) {
      x = a;
      a = c;
      c = x;
    }
    if (b > c) {
      x = b;
      b = c;
      c = x;
    }
  
    var kq = "<div class='alert alert-success'>";
    kq += "<p>Sắp xếp tăng dần: " + a + ", " + b + ", " + c + "</p>";
    kq += "</div>";
    document.getElementById("thongBao1").innerHTML = kq;
  };
  
  //Cau 2
  document.getElementById("btnHello").onclick = function () {
    // input: thanhVien: string
    var thanhVien = document.getElementById("myOption").value;
  
    // output loiChao: string;
    var loiChao = "";
  
    // progress
    switch (thanhVien) {
      case "Bo":
        loiChao = "Xin chào Bố";
        break;
      case "Me":
        loiChao = "Xin chào Mẹ";
        break;
      case "AnhTrai":
        loiChao = "Xin chào Anh Trai";
        break;
      case "EmGai":
        loiChao = "Xin chào Em Gái";
        break;
      default:
        loiChao = "Xin chào Người lạ ơi!";
    }
  
    // Xuất ra màn hình
    document.getElementById("thongBao2").innerHTML = loiChao;
  };
  //Cau 3
  function demSoChanLe(x, y, z) {
    var demSoChan = 0;
    var demSoLe = 0;
    var arr = [x, y, z];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        demSoChan++;
      } else {
        demSoLe++;
      }
    }
    return (kq = "So le: " + demSoLe + ", " + "So chan: " + demSoChan);
  }
  document.getElementById("btnCount").onclick = function () {
    var num1 = document.getElementById("num1").value * 1;
    var num2 = document.getElementById("num2").value * 1;
    var num3 = document.getElementById("num3").value * 1;
  
    var count = demSoChanLe(num1, num2, num3);
    var kq = "<div class='alert alert-success'>";
    kq += "<p>" + count + "</p>";
    kq += "</div>";
    document.getElementById("thongBao3").innerHTML = kq;
  };
  
  //Cau 4
  function tamGiac(a, b, c) {
    if (a == b || a == c || b == c) {
      kq = "cân";
    }
    if (a == b && b == c) {
      kq = "đều";
    }
    if (
      a == Math.sqrt(b * b + c * c) ||
      b == Math.sqrt(a * a + c * c) ||
      c == Math.sqrt(b * b + a * a)
    ) {
      kq = "vuông";
    }
    return kq;
  }
  document.getElementById("btnTriangle").onclick = function () {
    var c1 = document.getElementById("c1").value * 1;
    var c2 = document.getElementById("c2").value * 1;
    var c3 = document.getElementById("c3").value * 1;
    var tg = tamGiac(c1, c2, c3);
    var kq = "<div class='alert alert-success'>";
    kq += "<p>Tam giác: " + tg + "</p>";
    kq += "</div>";
    document.getElementById("thongBao4").innerHTML = kq;
  };
  
  //Bai 5
  document.getElementById('btnYesterday').onclick=function(){
    var day=document.getElementById('inputDay').value;
    var month=document.getElementById('inputMonth').value;
    var year=document.getElementById('inputYear').value;
    //ouput yesterday
    var yesterday=" ";
    //progress
    if(day===1&&month ===1){
        day=31;
        month=12;
        year-=1;
        yesterday=day+"/"+month+"/"+year;
    }else if(day<1||day>31||(day>28&&month===2)){
        yesterday="Ngày không xác định";
    }else if(month<1||month>12){
        yesterday="Tháng không xác định";
    }else{
        day-=1;
        yesterday=day + "/" + month + "/" + year;
    }
    document.getElementById("thongBao5").innerHTML=yesterday;
  };
  //Ngày mai
  document.getElementById("btnTomorrow").onclick = function () {
    // input ngay: number, thang: number, nam: number
    var day = Number(document.getElementById("inputDay").value);
    var month = Number(document.getElementById("inputMonth").value);
    var year = Number(document.getElementById("inputYear").value);
    // output ngayMai: string
    var tomorrow = "";
    // progress
    if (day === 31 && month === 12) {
      day = 1;
      month = 1;
      year += 1;
      tomorrow = day + "/" + month + "/" + year;
    } else if (day === 28 && month === 2) {
      day = 1;
      month += 1;
      tomorrow = day + "/" + month + "/" + year;
    } else if (
      day === 30 &&
      (month === 4 || month === 6 || month === 9 || month === 11)
    ) {
      day = 1;
      month += 1;
      tomorrow = day + "/" + month + "/" + year;
    } else if (
      day === 31 &&
      (month === 1 ||
        month === 3 ||
        month === 5 ||
        month === 7 ||
        month === 8 ||
        month === 10 ||
        month === 12)
    ) {
      day = 1;
      month += 1;
      tomorrow = day + "/" + month + "/" + year;
    } else if (day < 1 || day > 31 || (day > 28 && month === 2)) {
      tomorrow = "Ngày không xác định";
    } else if (month < 1 || month > 12) {
      tomorrow = "Tháng không xác định";
    } else {
      day += 1;
      tomorrow = day + "/" + month + "/" + year;
    }
  
    // output in ra màn hình giao diện
    document.getElementById("thongBao5").innerHTML = tomorrow;
  };
//bài 6
document.getElementById("btnTinhNngay").onclick = function () {
    // input thang:number, nam: number
    var thang = Number(document.getElementById("thang").value);
    var nam = Number(document.getElementById("nam").value);
    // output ngay: string
    var ngay = "";
    // progress
    switch (thang) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        ngay = "Tháng: " + thang + " - Năm: " + nam + " - Có: 31 ngày";
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        ngay = "Tháng: " + thang + " - Năm: " + nam + " - Có: 30 ngày";
        break;
      case 2:
        if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
          ngay = "Tháng: " + thang + " - Năm: " + nam + " - Có: 29 ngày";
          break;
        } else {
          ngay = "Tháng: " + thang + " - Năm: " + nam + " - Có: 28 ngày";
          break;
        }
      default:
        ngay = "Tháng: " + thang + " - Năm: " + nam + " Không xác định";
    }
  
    // output in ra giao diện
    document.getElementById("thongBao6").innerHTML = ngay;
  };

  //bài 7
  document.getElementById("btnDocSo").onclick = function () {
    // input soTuNhien: number
    var soTuNhien = Number(document.getElementById("soTuNhien").value);
    // output docSo: string, soHangTram: number, soHangChuc: number, soHangDonVi: number
    var docSo = "";
    var soHangTram = 0;
    var soHangChuc = 0;
    var soHangDonVi = 0;
    // progress
    soHangTram = Math.floor(soTuNhien / 100);
    soHangChuc = Math.floor((soTuNhien % 100) / 10);
    soHangDonVi = Math.floor((soTuNhien % 100) % 10);
    if (soTuNhien > 99 && soTuNhien <= 999) {
      switch (soHangTram) {
        case 1:
          docSo = "Một trăm ";
          break;
        case 2:
          docSo = "Hai trăm ";
          break;
        case 3:
          docSo = "Ba trăm ";
          break;
        case 4:
          docSo = "Bốn trăm ";
          break;
        case 5:
          docSo = "Năm trăm ";
          break;
        case 6:
          docSo = "Sáu trăm ";
          break;
        case 7:
          docSo = "Bảy trăm ";
          break;
        case 8:
          docSo = "Tám trăm ";
          break;
        case 9:
          docSo = "Chín trăm ";
          break;
      }
      switch (soHangChuc) {
        case 1:
          docSo += "mười ";
          break;
        case 2:
          docSo += "hai mươi ";
          break;
        case 3:
          docSo += "ba mươi ";
          break;
        case 4:
          docSo += "bốn mươi ";
          break;
        case 5:
          docSo += "năm mươi ";
          break;
        case 6:
          docSo += "sáu mươi ";
          break;
        case 7:
          docSo += "bảy mươi ";
          break;
        case 8:
          docSo += "tám mươi ";
          break;
        case 9:
          docSo += "chín mươi ";
          break;
      }
      switch (soHangDonVi) {
        case 1:
          docSo += "một";
          break;
        case 2:
          docSo += "hai";
          break;
        case 3:
          docSo += "ba";
          break;
        case 4:
          docSo += "bốn";
          break;
        case 5:
          docSo += "năm";
          break;
        case 6:
          docSo += "sáu";
          break;
        case 7:
          docSo += "bảy";
          break;
        case 8:
          docSo += "tám";
          break;
        case 9:
          docSo += "chín";
          break;
      }
    } else {
      docSo = "Hãy nhập số tự nhiên có 3 chữ số";
    }
    // output ras giao diện
    document.getElementById("ketQuaB7").innerHTML = docSo;
  };
//bài 8
document.getElementById("btnTim").onclick = function () {
    // input
    /*
      + tenSinhVien1: string, toaDoDiemX1: number, toaDoDiemY1: number
      + tenSinhVien2: string, toaDoDiemX2: number, toaDoDiemY2: number
      + tenSinhVien3: string, toaDoDiemX3: number, toaDoDiemY3: number
      + toaDoDiemX: number, toaDoDiemY: number
      + doDaiSV1: number, doDaiSV2: number, doDaiSV3: number
    */
    var tenSinhVien1 = document.getElementById("tenSinhVien1").value;
    var toaDoDiemX1 = Number(document.getElementById("toaDoDiemX1").value);
    var toaDoDiemY1 = Number(document.getElementById("toaDoDiemY1").value);
    var tenSinhVien2 = document.getElementById("tenSinhVien2").value;
    var toaDoDiemX2 = Number(document.getElementById("toaDoDiemX2").value);
    var toaDoDiemY2 = Number(document.getElementById("toaDoDiemY2").value);
    var tenSinhVien3 = document.getElementById("tenSinhVien3").value;
    var toaDoDiemX3 = Number(document.getElementById("toaDoDiemX3").value);
    var toaDoDiemY3 = Number(document.getElementById("toaDoDiemY3").value);
    var toaDoDiemX = Number(document.getElementById("toaDoDiemX").value);
    var toaDoDiemY = Number(document.getElementById("toaDoDiemY").value);
    var doDaiSV1 = 0;
    var doDaiSV2 = 0;
    var doDaiSV3 = 0;
  
    // output aiXaNhat: string
    var aiXaNhat = "";
  
    // progress
    doDaiSV1 = Math.sqrt(
      Math.pow(toaDoDiemX1 - toaDoDiemX, 2) +
        Math.pow(toaDoDiemY1 - toaDoDiemY, 2)
    );
    doDaiSV2 = Math.sqrt(
      Math.pow(toaDoDiemX2 - toaDoDiemX, 2) +
        Math.pow(toaDoDiemY2 - toaDoDiemY, 2)
    );
    doDaiSV3 = Math.sqrt(
      Math.pow(toaDoDiemX3 - toaDoDiemX, 2) +
        Math.pow(toaDoDiemY3 - toaDoDiemY, 2)
    );
  
    if (doDaiSV1 > doDaiSV2 && doDaiSV1 > doDaiSV3) {
      aiXaNhat = "Sinh viên xa trường nhất: " + tenSinhVien1;
    } else if (doDaiSV2 > doDaiSV1 && doDaiSV2 > doDaiSV3) {
      aiXaNhat = "Sinh viên xa trường nhất: " + tenSinhVien2;
    } else {
      aiXaNhat = "Sinh viên xa trường nhất: " + tenSinhVien3;
    }
    // output in ra màn hình giao diện
    document.getElementById("ketQuaB8").innerHTML = aiXaNhat;
  };
  
  