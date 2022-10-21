// Xac dinh slide hien tai va slide tiep theo khi click chuot 

var nutPhai = document.querySelector('.nuts b.phai');
var nutTrai = document.querySelector('.nuts b.trai');
var sildes = document.querySelectorAll('.slides ul li');  // mang 
var chisoHienTai = 0;
var soLuongSlide = sildes.length;
var trangthai = "dangDungYen";


var chuyenSlidePhai =  function()
{
  // kiem tra trangthai
  if (trangthai == "dangChuyenDong") {
    return 0; // dung chuong trinh
  }

  trangthai = "dangChuyenDong";
  //<---------------------------chạy đc 1 lần đầu tien , cấc lần sau k chạy đc vì đang có khách------->
  //<------Làm thế nào để về lại trạng thái dangDungYen ??---- -> khi 2 slide chuyển động xong thì trở về trạng thái dangDungYen----------->

  var trangthaiCua2CD = 0;

  //<-------------------------------->

  var ptuhientai = sildes[chisoHienTai];
  if (chisoHienTai < soLuongSlide - 1) {
    // chua den cuoi
    chisoHienTai++;
  }
  // la ptu cuoi cung
  else {
    chisoHienTai = 0;
  }
  var ptuTiepTheo = sildes[chisoHienTai];

  // check chuyen dong ket thuc
  var xuLyHienTaiKetThuc = function () {
    console.log("class hien tai da xong roi do");
    this.classList.remove("dangxem"); // this : ptuhientai
    this.classList.remove("bienmatKhiAnNext");
    // Dùng xog xóa luôn tránh việc class nào cũng có ==> không dùng lại đc vì có sẵn r sau k add đc
    trangthaiCua2CD++; // 1

    // hientai, tieptheo xog rồi thì quay về lại trạng thái dangDungYen
    if (trangthaiCua2CD == 2) {
      trangthai = "dangDungYen";
    }
  };
  var xuLyTiepTheoKetThuc = function () {
    console.log("slide tiep theo xong r do");
    this.classList.remove("diVaoKhiAnNext"); // this : ptuTiepTheo
    this.classList.add("dangxem");
    trangthaiCua2CD++; // 2

    // hientai, tieptheo xog rồi thì quay về lại trạng thái dangDungYen   =>
    if (trangthaiCua2CD == 2) {
      trangthai = "dangDungYen";
    }
  };
  ptuhientai.addEventListener("webkitAnimationEnd", xuLyHienTaiKetThuc);
  ptuTiepTheo.addEventListener("webkitAnimationEnd", xuLyTiepTheoKetThuc);
  //<---------------------------------------------------------------------------------------->

  // Tao chuyen dong sau khi xac dinh dc 2 ptu
  ptuhientai.classList.add("bienmatKhiAnNext");
  ptuTiepTheo.classList.add("diVaoKhiAnNext");

  // Debug lỗi giật chuyển dộng khi click quá nhiều lần ==> vô hiệu click trái phải trong thời gian đang chuyển động ( sd return)
}

// Độ dài bắt đầu từ 1 , chỉ số mảng bắt đầu từ 0

nutPhai.addEventListener('click', chuyenSlidePhai);


var chuyenSlideTrai =  function()
{
    if (trangthai == 'dangChuyenDong') {
        return false;
    }
    trangthai = "dangChuyenDong";

    var ptuhientai = sildes[chisoHienTai];
    if (chisoHienTai > 0) { // chua den cuoi cung
        chisoHienTai--;
    }
    else
    {
        chisoHienTai = soLuongSlide - 1 ;
    }
    var ptuTiepTheo = sildes[chisoHienTai];
    var trangthaiCua2CD = 0;

    var xuLyHienTaiKetThuc =  function()
    {
        this.classList.remove('dangxem');
        this.classList.remove('bienmatKhiAnPrev');
        trangthaiCua2CD++;
        if (trangthaiCua2CD == 2) {
            trangthai = "dangDungYen";
        }
    }
    var xuLyTiepTheoKetThuc = function()
    {
        this.classList.add('dangxem');
        this.classList.remove('diVaoKhiAnPrev');
        trangthaiCua2CD++;
        if (trangthaiCua2CD == 2) {
          trangthai = "dangDungYen";
        }
    }
    ptuhientai.addEventListener('webkitAnimationEnd', xuLyHienTaiKetThuc);
    ptuTiepTheo.addEventListener("webkitAnimationEnd", xuLyTiepTheoKetThuc);
    ptuhientai.classList.add("bienmatKhiAnPrev");
    ptuTiepTheo.classList.add("diVaoKhiAnPrev");
}

nutTrai.addEventListener('click', chuyenSlideTrai);

// Bai 103