from selenium import webdriver
import time
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
driver = webdriver.Chrome(ChromeDriverManager().install())

 # Optional argument, if not specified will search path.
driver.get("https://master.d120nc9yxmrxsg.amplifyapp.com/")
time.sleep(5) # Let the user actually see something!

##check movie page has movies
element = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "ul a[href='/movies']")))
element.click()
time.sleep(5)
assert "No movies." not in driver.page_source
##check pagination button on movies page
element =  WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".pagination > li:nth-child(2)")))
element.click()
time.sleep(5)
#check the images on the second page
all_images = driver.execute_script("return document.getElementsByTagName('img')")
assert len(all_images) == 20
#check the theatres page
element = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "ul a[href='/places']")))
element.click()
time.sleep(5)
assert "No theatres." not in driver.page_source
#check the subpage of theatres
element = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "ul li a[href='/10662/theaterinfo']")))
element.click()
time.sleep(5)
#check the ticket has 4 rows, name,date,time,buy
all_rows = driver.find_elements_by_css_selector(".movielist > div:nth-child(1) tr");
assert len(all_rows) == 4
#check the description can be open
element = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "a[href='/description/tt0084787']")))
element.click()
time.sleep(5)

#check the ticket page can be open
element = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "a[href='/checkout/10662/tt0084787']")))
element.click()
time.sleep(5)
#check the ticket has 5 rows
all_rows = driver.find_elements_by_css_selector("table tr");
assert len(all_rows) == 5
#check showtimes
element = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "ul a[href='/showtime/2020-03-22']")))
element.click()
time.sleep(5)
element = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "a[href='/showtime/2020-03-23']")))
element.click()
time.sleep(5)
assert "No showtimes." not in driver.page_source
#check reviews page
element = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "ul a[href='/reviews']")))
element.click()
time.sleep(5)
element = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "ul a[href='/']")))
element.click()
time.sleep(5)
element = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "ul a[href='/aboutus']")))
element.click()
time.sleep(5)
