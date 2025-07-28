import cv2

# تحميل الفيديو
cap = cv2.VideoCapture('IMG_9487.MP4')

# تحميل كاشف السيارات
car_cascade = cv2.CascadeClassifier('haarcars.xml')

# التحقق من فتح الفيديو
if not cap.isOpened():
    print("فشل في تحميل الفيديو")
    exit()

# قراءة الإطارات وعرضها
while True:
    ret, frame = cap.read()
    if not ret:
        break

    # تحويل للإطار الرمادي (مطلوب للكاشف)
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # كشف السيارات
    cars = car_cascade.detectMultiScale(gray, 1.1, 3)

    # رسم مستطيل حول كل سيارة
    for (x, y, w, h) in cars:
        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

    # عرض الإطار
    cv2.imshow('Car Detection', frame)

    # الخروج عند الضغط على "q"
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# إنهاء التشغيل
cap.release()
cv2.destroyAllWindows()

