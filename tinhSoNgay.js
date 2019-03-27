function tinhSoNgay() {
    var month = document.getElementById("id_month");
    console.log(month.value);
    switch (parseInt(month.value)) {
        case 1:case 3:case 5:case 7:case 8:case 10: case 12:
            document.write("Thang "+month.value+" co 31 ngay");break;
        case 4:case 6:case 9:case 11:
            document.write("Thang "+month.value+" co 30 ngay");break;
        case 2:
            document.write("Thang "+month.value+" co 28 ngay hoac 29 ngay");break;
    }
}
tinhSoNgay();
