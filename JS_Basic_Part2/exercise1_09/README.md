# ตัวดำเนินการแบบตรรกะ
## 1. คำสั่งต่อไปนี้จะแสดงค่าเป็นอะไร

``` JAVASCRIPT 
1. alert( null || 2 || undefined );
2. alert( alert(1) || 2 || alert(3));
3. alert( 1 && NUll && 2);
4. alert( alert(1) && alert(2) );
5. alert( null || 2 && 3 || 4);
```
1. แสดงเลข 2
2. แสดงเลข 1 แล้ว เลข 2
3. แสดง null
4. แสดง 1 แล้ว แสดง undefine
5. แสดง 3

## ให้เขียนระบบ login
___
- ให้ใช้ prompt ในการถามใครเป็นคน login
- ถ้าผู้ใช้กรอกว่า “Admin” ให้ใช้ prompt ถาม password
- วิธีเช็ค Password   
    - ถ้า string นั้นเป็น “codecamp#10” ให้ alert “ยินดีต้อนรับ”
    - ถ้า string เป็นอย่างอื่นให้ alert เป็น “Wrong password”
    - ถ้าผู้ใช้กรอกอย่างอื่นที่ไม่ใช่ “Admin” ให้ alert ว่า “ผมไม่รู้จักคุณ”
    - ถ้าผู้ใช้กรอก input เป็น string ว่าง หรือกด Esc ให้ alert ว่า “ยกเลิก”
