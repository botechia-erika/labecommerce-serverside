-- Active: 1689172805410@@127.0.0.1@3306



CREATE TABLE
    users (
        id TEXT PRIMARY KEY NOT NULL UNIQUE,
        name TEXT NOT NULL,
        nickname TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

DROP TABLE users;

INSERT INTO
    users(
        id,
        name,
        nickname,
        email,
        password
    )
VALUES (
        "f001",
        "FULANO",
        "fulano-bastos",
        "fulano@email.com",
        "jzD_yyEcp0M"
    ), (
        "f002",
        "BELTRANO",
        "beltrano-silva",
        "beltranosilva@email.com",
        "m4PlFzASXUc"
    ), (
        "f003",
        "ERIKA LUISA MENDONCA BOTECHIA DE JESUS LEITE",
        "erika-botechia",
        "botechiaeri@gmail.com",
        "Conway22124748"
    );

SELECT * FROM users WHERE name LIKE '%BELTRANO%';

SELECT * FROM users WHERE name LIKE '%ERIKA%';

SELECT * FROM users WHERE name LIKE '%FULANO%';

SELECT * FROM users ;

SELECT id , created_at FROM users ORDER BY id DESC;



CREATE TABLE
    products(
        id TEXT PRIMARY KEY NOT NULL UNIQUE,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        image_url TEXT NOT NULL,
        price REAL NOT NULL
    );

INSERT INTO
    products(
        id,
        name,
        description,
        image_url,
        price
    )
VALUES (
        "P001",
        "PREMIUM-MUSIC",
        "MENSAL",
        "https://cms-fym.imgix.net/free_apple_music_362cfbaf74.png?auto=compress,format&fit=fillmax&ch=Save-Data&w=1600&max-h=1600",
        7.00
    ), (
        "P002",
        "PREMIUM-PLANNER",
        "MENSAL",
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQEBAPDw8VDxEQGBIQEA8QEA8NEBAQFRIYFhYSFhUYHCgsGCYlHRMTITEhMSo3Li8vFyA4ODMsOCguLisBCgoKDg0OGxAQGy0lICUuLi0wLzA2Ny0vLS8vLi8rLS0tKy8tLS0vLS4tLS0vLS4tLS0rNy0rLS0tLS0tLS0tLv/AABEIAJ8BPgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBBAcDAv/EAEYQAAEDAgIDCwYNBAIDAQAAAAEAAgMEEQUSITGTBgcTIkFRVGFx0dIUFjKBkbEVFyMlNVVyg6Gys7TBQlJi8JKiM8LhNP/EABsBAQACAwEBAAAAAAAAAAAAAAAFBgECAwQH/8QAOhEAAgECAgQJCgYDAAAAAAAAAAECAxEEMSFBUZEFEhMiYXGxwfAGMjRTgYKSodHhFBUzUlTCcqLi/9oADAMBAAIRAxEAPwDsSIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCItSurRG11tLgCbcxA5VyrV6dGPHqOy8aFtfUbRi5OyK5iO6+R1RLSYbSeWyQHLUTPkFPTQv/ALC86XHqC0MZ3SYxS08tTJQ0ZZC3O8MqZ3PyjXYFgv7V871DfmuKQjjzSVMsp5XSGoe3MefQxo9StD3xyB0ZLJA4Fj2EteCCLFrm/wALtLQ7Gi0q5yH496joEO1lX2N/KqOkYfEfvJVfHbgsL+r4vY8fyvnzBwroEX/fvWLgoh39akWvh8QvpHykukKQ3G7tsTr53zQQxv4sokjmqZWQCz4izKxrSGFoc4A2u7M7MTlFrBiO5LB4GgvoI3OeckUTA90sz7XyMbm0nlJ1AAkkAEqU3NYIykjdlijifKQXRwi0cTRfJE063ZbuJcdbnOOgEALmTVqN2dZR2kxLD2tp7gPqaOY1DYbm13xuANutXWCZsjGyMcHseA9jhpDmkXBHqKha+BssUsTxmZIx7HNOkFrmkEfioLelxInCaRsmnKHsDtZDRI4Aexcq+IpUYceq7K6V9Wm+ezLPIzGLk7RL2iw0gi4NweULK6mAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCItSvqMoyjWdZ5lwxOJhh6TqzyXzepLpf3yNoQc5cVHxWVn9LD2u/gKKqTxHn/F35SvZVfdBjRcTTU/GLvk3ubxtJ4vBstr5lSVLEcJ4pX1boxv46W/lM4fDOXMhv72V3c3jT4cKpqRgLH/LGVx4rg188jg1va1wN+v2at+1SuLYK+nbdxzWysmLRxIpnAu4HNfjENsTbQLqKV8cuM2yawVGlRpKNLLbtfjLotbaS+HB/BvcJqhjm3DWwwVckZsM3GlYMrfbo5VP7nsRrKmBtgyHKXMdNOeGlNrEWiYbHiu9Iv0aOKdKprJ3NDmteWtPpNDiGu7QNat+4aX5OVnM5rv8Ak23/AKLBHcKUJ8jOpJp6U1oSaWTV82TVDhzIiXlzpZnAB88pDpHD+0WADBovlaA2+m11uErBK+SVkrZiU6D2H3Kob1P0TTfe/quVukOg9h9yqO9R9E033v6rlDeUHoXvx7JHowv6vsfcXSmqSw845R/IUtG8OAINwVBr3o6jIdPonX1KE4H4UeHkqNV8x/6/bbszyuemvR4y4yz7SWREV1I4IiIAiLWmxGBjssk8bHDW18rGuHqJQyouTslc2UWn8LUvSodvF3p8LU3SodvF3obclP8Aa9xuItP4WpulQ7eLvT4WpulQ7eLvS45Kp+17jcRafwvS9Kh28XenwvS9Kh28Xeg5Kex7jcRafwvS9Kh28XenwvS9Kh28Xeg5Kex7jcREQ0CIiAIiIAiIgCIiAIiIDEjw0Fx1DSoR7y4knWdC38Tk0Bv92v1f7+Cou6PHvSggPVJIPxa0+8qr8KqrjcXHC0so6W9Sb1vqTVutoleD8NKplr+SPvH8aLj5NTXe5xyOcy5NzxcjMus8l174NgPBskjnjLKlwLiwsZK80obd3kwuQZCQBc6W83P54RRCmhjrmOY5wBkfI9w4FjQLeSgAFxkJI020W0X03+qqtNTwcGHQNORgewhr2T0b83HHDZ7a9N+XNyqbwmEp4alydNdb1t7X40EnJ6OTou0dcstKvnfQle2h5q9tSlnF8Yma0xOYJZ4mlrqgF85poX6HMeLZeEADWl/Xa91GT7l3ktdA9s1PI0yCoJyRsa0cYSn+gjVb/wC2n8DpvJnPLZntp5gGTSO4OOalqY9OSW9wB6YudBzjXoJrGKY0aguZDEKeN7szooS8Nkfm4pc3U46tQ0nsFvWb4dycuLRSS1vr6M0078VJtZtq0lJxDW3sALk6ABpJPMr5uXwp1OxzpPTly3H9oF7A9fGN147nMB4ECSQXlPot1iMd/WrAsojuE+EVVvRpebre3q6OnX1Z/LnAAkmwGkk6ABzoSoLdhK4QFjQflTlceQMGkj16B6yoGgxiozwRyS5IozGHOAIL2t/vd2C3vXSKg15yT+2jeeKlwfVq0uVjlp+S8IvEp0HsPuVQ3pz81QdRkH/YH+VaGztewuY4PFiLtIcL21aFV96b6Kg+1J+YKE4e9Cf+Ue844ZNVUnsZcURFRSTJPD5rtynW1bSh6OTK9p59amFe+BMU6+FSlnHm+zV8tHWmRuJhxZ9YRFo45SyTU8kUMnBSOtZ9y3U4EtJGkXAI9alzjBJySbstuzpN6yrGJ7io55pJuGe0vOYtytcA467FRHmfXdJZtqjwp5n13SWbao8KwS1GlCg26eJim+g3fi/j6Q/Zt70+L+PpD9m3vWl5n13SWbao8KeZ9d0lm2qPCsHp5ap/LW43fi/j6Q/Zt70+L+PpD9m3vWl5n13SWbao8KeZ9d0lm2qPCg5ap/LW43fi/j6Q/Zt70+L+PpD9m3vWl5n13SWbao8KeZ9d0lm2qPCg5ap/LW43fi/j6Q/Zt70+L+PpD9m3vWl5n13SWbao8KeZ9d0lm2qPCg5ap/LW4vyIi2K8EREAREQBERAEREAREQEViLryHqt3rmmNYW+B+nS118j+QjmPWF0erPHetSrpWSsMcjczXe0HkIPIVSKXCcsNjas3pjKTutdk2k10pb+yfwVfkEtllfx7SjYLUy8emZIxsdTxH8MWiJvLn0+iRbQdfrsrMx8NHwTcnDUM/BP8p0vPlLDfhCBYttYXj5m6NOYGq4xhb6Z9vSY70H8jhzHmPUtdlVLwboQ9xjc4OdGDxXOGgG3+6hzBXGlUhVipwd08vHcStSiq9pReh56r9N1p4ysrX0aLPMkcZxh873NblGc2e+Bj421JDuI97C45jqIHWpCnp4cNgdWVhsWjitFnFpOgMaP6nHV1e0r63D0sUkLasHPnMjYyRYMDHujJHWS06eZUjfcxbha2KkLiIacMdJl0nPJpc63KRGW2+0eddEiDx+PTjyFB83W9vV0dqsskiJ3R7vqyrc4MkdSw/wBMULixxH+cgsSeyw6lWDM++bO7NrzZnZr897rqPlO5ClsMsta8AXc7ytxOjlDixv4LIx7cjLxX0MkI/uDJo/0ZCVsQ5UMA3c1lKQ10hqodToKhxkuP8Xm5b+I6l1TCRTV0TKmnNo33DmEWfG8ekwjkI9moi4IUA3cBguJA/A+JcHNbMIJXcLoHPG8NkHbcgcyhd72WXD8Unw2ci7y+J4Y4vZw8TS9r2nraHDVfSL6rLlUoxqed48azrSr1KTbg7XOqMiaxhawBrQDoHZrVc3qPomm+9/VcrLIdB7D7lWt6j6Jpvvf1XKJ8oPQvfj2SN8M2613sfcW5ERUgkj5U8x1wDzgfiFBqYpD8m3sVk8m5Wq1I7Unudv7Hkxi5qZ6oiK3HgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiICGqxx3rzWziLLPJ5wO5ay+cY6m6eJqRf7n23XyJem7wT6DXrKVkrDHI3M0+0HkIPIVG0mAxQZ3gl7srspfl4ug6rDX1qaXnUeg/7L/yrWjiasIunGTUXmtTy8PadeUnGLinoZWN6w/NNL21H7mRcw3zIS3FKonRn4J7etvAMbf2tcPUum715+aaXtqP3Miid9bc26eNlZA3NJAC2VrRdz4LkhwHKWkk25nHmX0ufnvrfaQMckem5LHMY8jp24VgMDGBjW+UPysbOWjK6Wznxk5iCb3OvWVLzY5ulaD5VglNVRcrInMuRyi3DPv/AMVxJuL1PBtiFXOIm+hEKiYRNGuzWB1gvqlxiqidmiq543DlZUTM9ztK1Ni77oqzBqiGd7qObBMUgbnjgZG9jZJhpY3KGgNubcYtY4a7myrm9+xz8UpDpJD5JHE3J/8AE8kk9ZP4rz3Q7rqvEIoIqx0cppy4tqOCayocCLZHvGgjqsNNibq7b1e5x0TXV0zcrpW5IGnQRESC6Qj/ACIbbqH+SA6FIdB7D7lXN6j6Jpvvf1XKwynQew+5V7eo+iab739VyhfKD0L349kjvhf1fY+4tyIio5JhTFIPk29ihVPMbYAcwA9isnk3C9WpLYkt7v8A1PJjHzUukyiIrceAIiIAiIgCIiAIiIAiIgCLn3k+Nc79rD408nxrnftYfGsXJL8uXrqfxfY6Ci595PjXO/aw+NPJ8a537WHxpcfly9dT+L7HQUXPvJ8a537WHxp5PjXO/aw+NLj8uXrqfxfY6Ci595PjXO/aw+NPJ8a537WHxpcfly9dT+L7HQUXPvJ8a537WHxrZw6DF+FZwhIZmZnzyRublvxri5Oq+pDD4PSTfLU/i+xeERFkjjTxOO4DubX6/wDfxUcpx7AQQdR0KFlYWktOsKneUOFcKyrpaJaH1r6pK3UyQws7x4uw+V51HoP+y/8AKvRedR6D/sv/ACqAh5y9nael5FU3sD81U3bUfuZFabqq72J+aqbtqP3MitBK+pT859b7SEjkim7ot7ulqXOlicaSV1y7I0Pic48pj0W9RCrfxUz3/wD2RW5+Dkv7L/yuqLBK1MlMwDe6padzZJ3GrkbYgPaGQtI5eDub+skdSuRKXXygEmo9h9yr+9R9E033v6rlOyHQew+5QW9R9E033v6rlC+UHoXvx7JHowv6vsfcW5ERUckz2o48zxzDX/vsUutXD4crcx1u/wBC2le+BcK6GGTlnLnPuW7VtbIzEz40+oIiKXOAREQBERAEREAREQBERAUDzyrujR7Co8aeeVd0aPYVHjV/RYsSf46h6iO9/QoHnlXdGj2FR4088q7o0ewqPGr+iWH46h6iO9/QoHnlXdGj2FR4088q7o0ewqPGr+iWH46h6iO9/QoHnlXdGj2FR4088q7o0ewqfGr+l0sPx1D1Ed7+hB7lsVnqGSOqIhGWkBrmtfG14I0izidWjT1qcRFk8FWcZzcox4q2bAiIhzC1a6nzDMPSH49S2kXDE4eGIpulPJ+E11PSbQk4u6IJedR6D/sv/KpSso73czXyt5+sKKn9B/Y78qoOKwVTCVlCp7HqenV3rVublIVFON0VLex+iqbtn/cyK0XVW3sj81U3bP8AuZFZyV9Iqec+t9pDxyRm6+VhYutTJlLrF1hAfMnonsPuUHvUfRNN97+q5Tcp4ruw+5Qm9R9E033v6rlCeUPoXvx7JHowv6vsfcW5bFFT5zc+iNfWsUtMX9TeU9ylGMAAAFgFDcD8FOvJVqq5iyX7v+e3LK56q9fi81Z9h9IiK5kcEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAWpWUoka4anEFoPWRyraK16jNbi61zq0YVY8SorozGTi7o5nvaTDyHyc6JaWWeKZh0Oa4zOeLjsd+B5lalDY3uGdNUOrKeZ9FUP8A/JJA6zZet7NRWt5n4p9bybCHuXZ6W2aJWRYSUVe8z8U+t5NhD3LHmdin1vJsIe5LdJksKwq/5m4p9bybGHuTzNxT63k2MPclukwSuLVrIIJppDlZGxziT2aAOsmwA5ym9RhpbhNGZb8Zrnhuriue4tPssVDje7lmex1fWy1rGEOEDiIoSRylrda6NSMLWtbYNDQGhrRYAAWAAXGtRp1oqNRXSadtV1ffmbRlKLujaaFlYCyugCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAvghfaIDzyrGVelksgPPKmVelksgPPKmVelksgPjKsgL6slkACyiIAiIgCIiAIiIAiIgCIiAIiIAiIgP/9k=",
        7.00
    ), (
        "P003",
        "PREMIUM-TASKS",
        "MENSAL",
        "https://cms-fym.imgix.net/how_much_is_spotify_premium_e81b7f47ff.png?auto=compress,format&fit=fillmax&ch=Save-Data&w=1600&max-h=1600",
        8.00
    );

SELECT * FROM products;

create TABLE
    purchases(
        id TEXT PRIMARY KEY NOT NULL UNIQUE,
        product_id TEXT NOT NULL,
        quantity INTEGER NOT NULL,
        total_price REAL NOT NULL,
        buyer_id TEXT NOT NULL,
        FOREIGN KEY (product_id) REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (buyer_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
    );

DROP TABLE purchases;

INSERT INTO
    purchases(
        id,
        product_id,
        quantity,
        total_price,
        buyer_id
    )
VALUES ("PG001", "P001", 1, 7, "u001"), ("PG002", "P002", 1, 8, "u002"), ("PG003", "P003", 1, 7, "u003");
SELECT * FROM purchases;

SELECT * FROM products_purchases;


SELECT
    products.name,
    products.price,
    purchases.quantity,
    purchases.total_price,
    purchases.buyer_id
FROM purchases
    INNER JOIN products_purchases ON purchases.id = products_purchases.purchase_id
    INNER JOIN products ON products_purchases.product_id = products.id;

SELECT * FROM products_purchases;

DROP TABLE users_tasks ;

