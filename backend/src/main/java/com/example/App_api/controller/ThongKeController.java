package com.example.App_api.controller;

import com.example.App_api.response.TopTour;
import com.example.App_api.service.StatisticalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/thongke")
@CrossOrigin
public class ThongKeController {
    @Autowired
    private StatisticalService statisticalService;
    @GetMapping("/taikhoan")
    public Map<String,Object> getThongKeTaiKhoan(){
        return  statisticalService.thongketaikhoan();
    }
    @GetMapping("/tophd/{sl}")
    public List<Map<String,Object>> getTopHd(@PathVariable int sl){
        return  statisticalService.topAccount(sl);
    }
    @GetMapping("/hoadon")
    public Map<String,Object> getThongKeHd(){
        return  statisticalService.thongKeHoaDon();
    }
    @GetMapping("/hoadon/{year}")
    public Map<String,Object> getThongKeHdTheoNam(@PathVariable String year){
        return  statisticalService.thongKeHoaDonTheoNam(year);
    }
    @GetMapping("/hoadon/ngay")
    public Map<String,Object> getThongKeHdTheoNgay(@RequestParam(defaultValue = "now") String date) throws ParseException {
        return  statisticalService.thongKeHoaDonTheoNgay(date);
    }
    @GetMapping("/doanhthutheothang/{year}")
    public Map<String,Object> getThongKeDoanhThuTheoThang(@PathVariable String year) throws ParseException {
        return  statisticalService.thongKeDoanhThuTheoThang(year);
    }
    @GetMapping("/doanhthutheongay")
    public Map<String,Object> getThongKeDoanhThuTheoNgay(@RequestParam(defaultValue = "now") String date) throws ParseException {
        return  statisticalService.thongKeDoanhThuTheoNgay(date);
    }
    @GetMapping("/doanhthudenngay")
    public List<Map<String,Object>> getThongKeDoanhThuDenNgay(@RequestParam(defaultValue = "now") String date) throws ParseException {
        return  statisticalService.thongKeDoanhThuDenNgay(date);
    }
    @GetMapping("/thongketour")
    public Map<String,Object> getThongKeTour() throws ParseException {
        return  statisticalService.thongKeTour();
    }
    @GetMapping("/toptour/{sl}")
    public List<TopTour> thongkeTopTour(@PathVariable int sl) throws ParseException {
        return  statisticalService.getTopTour(sl);
    }
}
