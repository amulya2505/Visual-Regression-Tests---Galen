var devices = {
  mobile: {
    deviceName: "Mobile",
    size: "500x640",
    isMobile: true
  },
  desktop: {
    deviceName: "Desktop",
    size: "1440x900",
    isMobile: false
  }
};

var browsers = {
  chrome: {
    browserName: "chrome"
  }
};
  


var content = loadProperties("./sconstant.properties");


function openWebsite(driver,device)
  {
    if(!device.isMobile)
    {
      Thread.sleep(1500);
      driver.findElement(By.xpath(content.get("homepagebutton"))).click();
    }
    else
    {

      Thread.sleep(1500);
      driver.findElement(By.xpath(content.get("homepagebutton_mobile"))).click();

    }
  
  }


  function create_driver(url,device,browser){
    var dr = createDriver(url,device.size,browser.browserName);
    return dr;
  }




forAll(devices, function (device) {
    forAll(browsers, function (browser) {
      test("Test Home Page ", function (device,browser) {
        var driver = create_driver(content.get("url"),device,browser);
  
          openWebsite(driver,device);
          Thread.sleep(1000);
          checkLayout(driver,"././specs/sample.gspec", [device.deviceName]);
          driver.close();
        
      });
   });
 });
  
