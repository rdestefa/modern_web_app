import unittest
from selenium import webdriver
from selenium.webdriver.support.ui import Select
import unittest
import time
import secrets

# class which runs the unit tests
class InputFormsCheck(unittest.TestCase):
    def setUp(self):
        '''setUp method is run at the start of unit testing to configure the selenium driver'''
        self.ChromeDriverPath='/mnt/c/chromedrivers/chromedriver.exe' # modify based on the path of your chromedriver from https://chromedriver.chromium.org/downloads
        self.url='http://localhost:8885/' # modify based the port for your gulp server
        self.driver = webdriver.Chrome(self.ChromeDriverPath)

    def test_armor(self):
        '''test_armor tests functionality of the armor component of the project by getting and setting values in various fields'''
        self.driver.get(self.url)

        time.sleep(2.5)
        
        # logging in and checking that the user has been logged in successfully 
        email=self.driver.find_element_by_name("email")
        password=self.driver.find_element_by_name("password")
        username=self.driver.find_element_by_name("username")
        
        email.send_keys(secrets.login_email)
        password.send_keys(secrets.login_password)
        username.send_keys(secrets.login_username)
        
        assert secrets.login_email in email.get_attribute("value")
        assert secrets.login_password in password.get_attribute("value")
        assert secrets.login_username in username.get_attribute("value")

        self.driver.find_element_by_name("submitbutton").click()
        time.sleep(2.5)
        
        checkVal=len(self.driver.find_elements_by_name("logout"))
        assert checkVal is 1

        # clicking on page for armor
        self.driver.find_element_by_id("armorlink").click()

        time.sleep(2.5)

        # selecting the dropdown menu for a given armor and loading its data
        armorMenu=Select(self.driver.find_element_by_id("armor"))
        armorMenu.select_by_visible_text("Spirit Visage")

        # expected values for this armor
        SVhealth=450
        SVhealthregen=0
        SVarmor=0
        SVmagicresist=55
        SVattackdamage=0
        SVattackspeed=0

        self.driver.find_element_by_id("load_data").click()
        
        # checking the data that has been loaded properly
        health_field=self.driver.find_element_by_id("health_field")
        health_regen_field=self.driver.find_element_by_id("health_regen_field")
        armor_field=self.driver.find_element_by_id("armor_field")
        magic_resist_field=self.driver.find_element_by_id("magic_resist_field")
        attack_damage_field=self.driver.find_element_by_id("attack_damage_field")
        attack_speed_field=self.driver.find_element_by_id("attack_speed_field")

        assert SVhealth == int(health_field.get_attribute("value"))
        assert SVhealthregen == int(health_regen_field.get_attribute("value"))
        assert SVarmor == int(armor_field.get_attribute("value"))
        assert SVmagicresist == int(magic_resist_field.get_attribute("value"))
        assert SVattackdamage == int(attack_damage_field.get_attribute("value"))
        assert SVattackspeed == int(attack_speed_field.get_attribute("value"))

        time.sleep(2.5)

    def test_champions(self):
        '''test_champions tests functionality of the champions component of the project by getting and setting values in various fields'''
        self.driver.get(self.url)

        time.sleep(2.5)
        
        # logging in and checking that the user has been logged in successfully 
        email=self.driver.find_element_by_name("email")
        password=self.driver.find_element_by_name("password")
        username=self.driver.find_element_by_name("username")
        
        email.send_keys(secrets.login_email)
        password.send_keys(secrets.login_password)
        username.send_keys(secrets.login_username)
        
        assert secrets.login_email in email.get_attribute("value")
        assert secrets.login_password in password.get_attribute("value")
        assert secrets.login_username in username.get_attribute("value")

        self.driver.find_element_by_name("submitbutton").click()
        time.sleep(2.5)
        
        checkVal=len(self.driver.find_elements_by_name("logout"))
        assert checkVal is 1

        time.sleep(2.5)
        
        # clicking on page for champions
        self.driver.find_element_by_id("championslink").click()
        
        time.sleep(2.5)

        armorMenu=Select(self.driver.find_element_by_id("champion"))
        armorMenu.select_by_visible_text("Darius")

        self.driver.find_element_by_id("load_data").click()

        Darius_health=582
        Darius_health_regen=10
        Darius_armor=39
        Darius_magic_resist=32.1
        Darius_attack_damage=64
        Darius_attack_speed=0.625
        
        # checking the data that has been loaded
        health_field=self.driver.find_element_by_id("health_field")
        health_regen_field=self.driver.find_element_by_id("health_regen_field")
        armor_field=self.driver.find_element_by_id("armor_field")
        magic_resist_field=self.driver.find_element_by_id("magic_resist_field")
        attack_damage_field=self.driver.find_element_by_id("attack_damage_field")
        attack_speed_field=self.driver.find_element_by_id("attack_speed_field")

        assert Darius_health == int(health_field.get_attribute("value"))
        assert Darius_health_regen == int(health_regen_field.get_attribute("value"))
        assert Darius_armor == int(armor_field.get_attribute("value"))
        assert Darius_magic_resist == float(magic_resist_field.get_attribute("value"))
        assert Darius_attack_damage == int(attack_damage_field.get_attribute("value"))
        assert Darius_attack_speed == float(attack_speed_field.get_attribute("value"))

        time.sleep(2.5)

        # creating a new champion
        new_name=self.driver.find_element_by_id("new_name")
        new_hp=self.driver.find_element_by_id("new_hp")
        new_hp_lv=self.driver.find_element_by_id("new_hp_lv")
        new_hp_regen=self.driver.find_element_by_id("new_hp_regen")
        new_hp_regen_lv=self.driver.find_element_by_id("new_hp_regen_lv")
        new_armor=self.driver.find_element_by_id("new_armor")
        new_armor_lv=self.driver.find_element_by_id("new_armor_lv")
        new_mr=self.driver.find_element_by_id("new_mr")
        new_mr_lev=self.driver.find_element_by_id("new_mr_lv")
        new_ad=self.driver.find_element_by_id("new_ad")
        new_ad_lv=self.driver.find_element_by_id("new_ad_lv")
        new_as=self.driver.find_element_by_id("new_as")
        new_as_lv=self.driver.find_element_by_id("new_as_lv")

        # expected values for new champion
        new_name_val="Example Champion"
        new_hp_val=200
        new_hp_lv_val=20
        new_hp_regen_val=10
        new_hp_regen_lv_val=2
        new_armor_val=50
        new_armor_lv_val=5
        new_mr_val=17
        new_mr_lev_val=8
        new_ad_val=150
        new_ad_lv_val=67
        new_as_val=1
        new_as_lv_val=2

        new_name.send_keys(new_name_val)
        new_hp.send_keys(new_hp_val)
        new_hp_lv.send_keys(new_hp_lv_val)
        new_hp_regen.send_keys(new_hp_regen_val)
        new_hp_regen_lv.send_keys(new_hp_regen_lv_val)
        new_armor.send_keys(new_armor_val)
        new_armor_lv.send_keys(new_armor_lv_val)
        new_mr.send_keys(new_mr_val)
        new_mr_lev.send_keys(new_mr_lev_val)
        new_ad.send_keys(new_ad_val)
        new_ad_lv.send_keys(new_ad_lv_val)
        new_as.send_keys(new_as_val)
        new_as_lv.send_keys(new_as_lv_val)

        time.sleep(5)

        self.driver.find_element_by_id("new_champion").click()

        time.sleep(2.5)
        
        # verifying that the champion has been created
        assert new_name_val == str(new_name.get_attribute("value"))
        assert new_hp_val == int(new_hp.get_attribute("value"))
        assert new_hp_lv_val == int(new_hp_lv.get_attribute("value"))
        assert new_hp_regen_val == int(new_hp_regen.get_attribute("value"))
        assert new_hp_regen_lv_val == int(new_hp_regen_lv.get_attribute("value"))
        assert new_armor_val == int(new_armor.get_attribute("value"))
        assert new_armor_lv_val == int(new_armor_lv.get_attribute("value"))
        assert new_mr_val == int(new_mr.get_attribute("value"))
        assert new_mr_lev_val == int(new_mr_lev.get_attribute("value"))
        assert new_ad_val == int(new_ad.get_attribute("value"))
        assert new_ad_lv_val == int(new_ad_lv.get_attribute("value"))
        assert new_as_val == int(new_as.get_attribute("value"))
        assert new_as_lv_val == int(new_as_lv.get_attribute("value"))

        time.sleep(2.5)

    def test_register(self):
        '''test_register tests functionality of the registration component of the project by registering a new user'''
        self.driver.get(self.url)

        print('Registration credentials: \nemail: {} \nusername: {} \npassword: {}'.format(secrets.reg_email, secrets.reg_username, secrets.reg_password))
        time.sleep(2.5)
        # selecting "Don't have an account? Create one here" link
        self.driver.find_element_by_id("registerlink").click()
        time.sleep(2.5)

        # populating email, pw, and username fields
        email=self.driver.find_element_by_name("email")
        password=self.driver.find_element_by_name("password")
        username=self.driver.find_element_by_name("username")
        
        email.send_keys(secrets.reg_email)
        password.send_keys(secrets.reg_password)
        username.send_keys(secrets.reg_username)
        
        # verifying that the fields have been populated
        assert secrets.reg_email in email.get_attribute("value")
        assert secrets.reg_password in password.get_attribute("value")
        assert secrets.reg_username in username.get_attribute("value")

        time.sleep(2)

        # selecting "Create User" button
        self.driver.find_element_by_name("submitbutton").click()
        time.sleep(3)
        
        # verifying that the user has been created and logged in by checking that they now have the ability to log out
        checkVal=len(self.driver.find_elements_by_name("logout"))
        assert checkVal is 1

    def test_login(self):
        '''test_login tests functionality of the login component of the project by logging in an existing user'''
        self.driver.get(self.url)

        print('Login credentials: \nemail: {} \nusername: {} \npassword: {}'.format(secrets.login_email, secrets.login_username, secrets.login_password))
        time.sleep(2.5)
        
        # populating email, pw, and username fields
        email=self.driver.find_element_by_name("email")
        password=self.driver.find_element_by_name("password")
        username=self.driver.find_element_by_name("username")
        
        email.send_keys(secrets.login_email)
        password.send_keys(secrets.login_password)
        username.send_keys(secrets.login_username)
        
        # verifying that the fields have been populated
        assert secrets.login_email in email.get_attribute("value")
        assert secrets.login_password in password.get_attribute("value")
        assert secrets.login_username in username.get_attribute("value")

        time.sleep(2)

        # selecting "Login" button
        self.driver.find_element_by_name("submitbutton").click()
        time.sleep(3)

        # verifying that the user has been logged in by checking that they now have the ability to log out
        checkVal=len(self.driver.find_elements_by_name("logout"))
        assert checkVal is 1
    
    def tearDown(self):
        '''called at the end of the unit test to close the window'''
        self.driver.close()

# executed with 'Python3 ModernWebTest.py' command
if __name__ == "__main__":
    unittest.main()