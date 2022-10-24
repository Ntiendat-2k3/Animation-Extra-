// Xac dinh slide hien tai va slide tiep theo khi click chuot 

var nutPhai = document.querySelector('.nuts b.phai');
var nutTrai = document.querySelector('.nuts b.trai');
var sildes = document.querySelectorAll('.slides ul li');  // mang 
var chisoHienTai = 0;
var soLuongSlide = sildes.length;
var trangthai = "dangDungYen";

//: -----------------Đóng gói -----------------------------------
function xacDinh2SlidevaChuyenDong(nutnao)
{
  /// Xac dinh 2 ptu
  if (trangthai == "dangChuyenDong") {
    return 0; // dung chuong trinh
  }
  trangthai = "dangChuyenDong";
  var trangthaiCua2CD = 0;
  var ptuhientai = sildes[chisoHienTai];

  if (nutnao == "nutTrai") {
    if (chisoHienTai > 0) {
      // chua den cuoi cung
      chisoHienTai--;
    } else {
      chisoHienTai = soLuongSlide - 1;
    }
  } else if (nutnao == "nutPhai") {
    if (chisoHienTai < soLuongSlide - 1) {
      // chua den cuoi
      chisoHienTai++;
    }
    // la ptu cuoi cung
    else {
      chisoHienTai = 0;
    }
  }

  var ptuTiepTheo = sildes[chisoHienTai];
  /// End Animation check
  var xuLyHienTaiKetThuc =  function()
  {
      this.classList.remove('dangxem');
       if (nutnao == "nutTrai") {
             this.classList.remove("bienmatKhiAnPrev");
       } else if (nutnao == "nutPhai") {
            this.classList.remove("bienmatKhiAnNext");
       }
      trangthaiCua2CD++;
      if (trangthaiCua2CD == 2) {
          trangthai = "dangDungYen";
      }
  }
  var xuLyTiepTheoKetThuc = function()
  {
      if (nutnao == "nutTrai") {
          this.classList.remove("diVaoKhiAnPrev");
      } 
      else if (nutnao == "nutPhai") {
          this.classList.remove("diVaoKhiAnNext");
      }
      this.classList.add("dangxem");
      trangthaiCua2CD++;
      if (trangthaiCua2CD == 2) {
        trangthai = "dangDungYen";
      }
  }
  ptuhientai.addEventListener('webkitAnimationEnd', xuLyHienTaiKetThuc);
  ptuTiepTheo.addEventListener("webkitAnimationEnd", xuLyTiepTheoKetThuc);

  /// Xu ly chuyen dong
  if (nutnao == "nutTrai") {
    ptuhientai.classList.add("bienmatKhiAnPrev");
    ptuTiepTheo.classList.add("diVaoKhiAnPrev");
  } else if (nutnao == "nutPhai") {
    ptuhientai.classList.add("bienmatKhiAnNext");
    ptuTiepTheo.classList.add("diVaoKhiAnNext");
  }
}
//:<--------------------------------------------------------------------------------------------->


var chuyenSlidePhai =  function()
{
  xacDinh2SlidevaChuyenDong('nutPhai');
}

var chuyenSlideTrai =  function()
{
  xacDinh2SlidevaChuyenDong("nutTrai");
}

nutPhai.addEventListener("click", chuyenSlidePhai)
nutTrai.addEventListener('click', chuyenSlideTrai);

