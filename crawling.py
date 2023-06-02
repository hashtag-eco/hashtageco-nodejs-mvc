import requests
import urllib
import csv
import MySQLdb
import re



conn = MySQLdb.connect (
    user="cc",
    passwd="password",
    host="34.64.151.238",
    db="eco_db",
    port=3306,
    charset="utf8"
    #connectionUrl=f"mysql://cc:password@34.64.151.238:3306/eco_db?charset=utf8"
)

# 네이버에서 발급받은 Client ID, Client Secret 
# request에 헤더로 보내게 됨
client_id = 'oe6h7Z2KCv4gCrqCxn7B'
client_secret = 'TpcXS6odwa'


#검색하고 싶은 키워드 입력
query = "제로웨이스트식품"
query = urllib.parse.quote(query)

#검색 결과 출력 건수 지정 최대 100
display = "50"

start = "1"

url = "https://openapi.naver.com/v1/search/shop?query=" + query + "&display=" + display + "&start=" + start
header_params = {"X-Naver-Client-Id":client_id, "X-Naver-Client-Secret":client_secret}
res = requests.get(url, headers=header_params)

name = []
price = []
upload_date = []
url_link = []
mall_name = []
brand = []
#upload_date = []
category1 = []
category2 = []
image = []

if res.status_code == 200:
    data = res.json()
    for index, item in enumerate(data['items']):
        #html 태그 제거
        item['title'] = re.sub('(<([^>]+)>)', '', item['title'])
        #이모티콘 제거
        item['title'] = item['title'].encode('utf-8', 'ignore').decode('utf-8')
        name.append(item['title'])
        price.append(item['lprice'])
        #upload_date.append(item[''])
        url_link.append([item['link']])
        mall_name.append(item['mallName'])
        brand.append(item['brand'])
        category1.append(item['category1'])
        category2.append(item['category2'])
        image.append(item['image'])
        print (index + 1, item['title'], item['link'], item['image'], item['mallName'], item['brand'], item['category1'])
else:
    print ("Error Code:", res.status_code)
    
items = [item for item in zip(name, price, url_link, mall_name, brand, category1, category2, image)]

print(items[0])
# 커서 생성
cursor = conn.cursor()
cursor.execute("set names utf8")


#데이터 저장하기
for item in items:
    cursor.execute(f"INSERT INTO ZeroWasteProduct(product_name, price, url_link, mall_name, brand, category1, category2, image_link) VALUES( \"{item[0]}\", \"{item[1]}\", \"{item[2]}\", \"{item[3]}\", \"{item[4]}\", \"{item[5]}\", \"{item[6]}\", \"{item[7]}\" )")
   
    
#커밋하기
conn.commit()

#연결 종료하기
conn.close()

# response = urllib.request.urlopen(request)
# print(response.read().decode('utf-8'))