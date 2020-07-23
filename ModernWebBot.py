from selenium import webdriver
from selenium.webdriver.common.by import By
import unittest
import time
import os
import secrets

class ModernWebBot(unittest.TestCase):
    def __init__(self, email, username, password):
        os.system('ls')
        self.driver=webdriver.Chrome('/mnt/c/chromedrivers/chromedriver.exe')
        self.driver.get('http://localhost:8885/')
        self.email=email
        self.username=username
        self.password=password
        self.hiddenpw=self.password[0]+"*"*(len(self.password)-1)
        print('Credentials: \nemail: {} \nusername: {} \npassword: {}'.format(self.email, self.username, self.hiddenpw))
        time.sleep(2.5)
    def registerUser(self):
        self.driver.find_element_by_id("registerlink").click()
        time.sleep(2.5)
        self.driver.find_element_by_name("email").send_keys(self.email)
        self.driver.find_element_by_name("password").send_keys(self.password)
        self.driver.find_element_by_name("username").send_keys(self.username)
        time.sleep(2)
        self.driver.find_element_by_name("submitbutton").click()
        time.sleep(3)
    def loginUser(self):
        time.sleep(2.5)
        self.driver.find_element_by_name("email").send_keys(self.email)
        self.driver.find_element_by_name("password").send_keys(self.password)
        self.driver.find_element_by_name("username").send_keys(self.username)
        print(self.driver.page_source)
        assert "No results found." not in driver.page_source
        time.sleep(2)
        self.driver.find_element_by_name("submitbutton").click()
        time.sleep(3)
    def quitBrowser(self):
        print("closing browser")
        self.driver.quit()

if __name__=='__main__':
   #ModernWebBot(secrets.reg_email, secrets.reg_username, secrets.reg_password).registerUser()
   MWBInstance=ModernWebBot(secrets.login_email, secrets.login_username, secrets.login_password)
   MWBInstance.loginUser()
   MWBInstance.quitBrowser()
