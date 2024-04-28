"use client"
import { Avatar } from "@nextui-org/react";
import '../group/page.css'
import { Link } from "react-router-dom";
import { useRouter } from 'next/navigation';

export default function GetGroup() {

    const groupName = "Team Awesome";

    const avatars = [
        { id: 1, src: "https://i.pravatar.cc/150?u=a042581f4e29026024d", name: "Yemi" },
        { id: 2, src: "https://media.istockphoto.com/id/471247592/photo/portrait-of-arab-businessman.jpg?s=612x612&w=0&k=20&c=g4Ass1bmp7FFwE60w8sCgP2ws8eQeBfoCzD8EP4YoZY=", name: "Evan" },
        { id: 3, src: "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/headshot-of-a-handsome-middle-eastern-businessman_Sa55F84te_thumb.jpg", name: "Nkazi" },
        { id: 4, src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFhYYGRgZGBocGRgaGBgYGhgYGBgZGhocGhocIS4lHB4rIRwYJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QGhISGjEhISQxMTQ0NDExMTE0NDE0NDQ0MTQ0NDQxNDQ0NDQ0NDE0NDQ0NEA/NDQxPzQ0MTU0MTExMf/AABEIAPsAyQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAQIEBQYHAAj/xAA+EAACAQICBggEBQIFBQEAAAABAgADEQQhBRIxQVFhBiJxgZGhsfATMsHRB0JScuFi8RQjkrLCFTOCouIW/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECBAMF/8QAIREBAQEBAAMAAwADAQAAAAAAAAECEQMhMRIiQRNCYZH/2gAMAwEAAhEDEQA/AFAj1iETywIZVkhBBLDU4FRCI3Vj4loyhmrHBY+0axiU8BPETyGHygXQQs8RA4nFIgJYgAcZn8X0wopkusx5AAeJ+0B7rTKsIBMC/Ts/lpeL/ZZMwvThD89NhxKkN5G0BytqohNWV2itL0aw6jqT+m9mHapzlpGRurBPJBMCwgEfVimPKxhEB0lo1hFiWiHSqJ5xFEdA+gsILUh3SD1YGjskZqQgMeovAQ1YenPLShFWMqcBHascgiMYEYY1lhbRCsAEJSae6QJRBRes9tl/l5twg+kOnggKIevsLbk+7Tn+JcsTtz2k5kyLVTP9p2k9K1KrXZieA2AdglaTDMkZqROgZiIxhlS+Z2bohW+yUXEvD4m1m2MNhGRB5GarR3TSqmTgOu+/VcX5jbv3TGpRJ4w6UmXmPeUXS/F1/RWmqOIHUfrb0OTDu+0sSJxTWZCGUkHaCDYg8iNhm86L9KviWp1iA+xXOQfkeDesqaRrPGraChGjSkaemtPKsUrFQwHQ2EeiRGhEMFQhWD1YS89EavKRaYh2SIqRplEUxVE8qwiCAeYRloa0QrEoMSi6T6Y+Cmoh673C/wBI3t9poHyF5yzTmM+JWdwd9l5KMh94tU8ztQqr/wBzx+8E/A98SnYkcBmfX32xxW54nae07B6yVglI0UrnV7z2SWoG07s+4RERtm9jsG8nd74QBiYdnbURb+k0uiujCgXfM8N0tdCaHFNBcdY/MefCXqUZk35bbyfGzx+GSd19Z6toZCLaoy32lXitDWN02cJsnoyJVoTnnWp/XTXjzf4xmJwQ1AeHvulFXQobzoGIwOsDkO22Ymb0jgLXuMpq8e+sfkx+LUdENP8AxlFNz1wLKx/Pbd+63j3TVTimDqaj7SLHIjIg3uCJ1rQWkfj0g5+cdVwP1DfbgdvfNGazazz2sGEGRCmMIlIDYRFMOVgolQ5I+0YBHXiUEBF1Y4CPURo6aBFEeREUQMs9HARpEApulOO+Fh3a+bdUdp/i85c7ZE+U0/T/AB2s6UwckzPafY8ZmNwvvJ8h9zIrrn4TBnNid1hbxPmdXwklRv4/2+nnAEWuOV/IQyjIDhYeX8RGKKeWfHyGyXugNGFnWo+xflG3Pj9e+VuDpfEflw5C022Ao2Ambzbs/WNPgxL+1WNGnJApz2HW+yShTnKRoukB0kSqstXSVmMrInzOB2mKw5qAhYHE4DXU/a+XZPf42nfJ1PeJd6PphrGdfFPbP5rOdcc0xhSj9hsfpNP0J0jquFJ6rjVPJh8p8yO+R+n2FCV2C7xfv9+sptG1yp7bEcjlmPWa4yX27AVjTGaNxQqU1fiM+TDI+cO6zo48NjGWPEV1gOgkxt4TViasR9OCxwE8BFjTHo4RBFtBUOtI2NrBELHdJEy/TnG6lDV3vl3b/L1k057c/wBI4nXYuTcszHuNpBZ+t2L/ALjGl790cF2ns9ZDqk1DcX5AeNh77JIqDYeGfj/aAcdXndbeIkgC+oLbbCAWui8K7W1G1Mtu05kZeUuv+nVrX+Kx7yvpK3RmKVLjgftLjCaapk2LKLcWA3XmTV1dXkbMTMzO0bAYmrTYXLMN921h4GaihigwvaZxayP8pz5HIyVgKjXsZGre+3TOZz0ssbiLKbbZmX0eHa7G9+A9TLTHOb2lZjNLpRA1za/aSewRZtt5BrOZO0ZdGU1/KD25zQaFphRZfl/T+k8uXKYOr0kuSQj6oNmYoQqk3+Y7rgcJodEaVDKpU77GxuPGdcTWb2/HHyfjrPM/VL+Jyf5lNtmsjA9xH3mIwTm6g7xbxvN7+JA1hRb9447lInO8CeuQd2zx/nzmqMnOOl9A9IFg1Njnqhx2jqP56p75sGnMtA4r4Vem24vqt+2ov3se6dNE6Z+OWpyhxxnnE8DGXQyIloQR2rAGz1os9BJVjgIiiOUQU8RObfiTiOuibgCZ0ozlX4iNfED9v1tJ0efrL0BkTxNvAZ/SHYWVjy+8HT2KO0+J/iTKlLqN2SHYNxmOwfz5iSaLWIJ3C/hskLX1mT9vpnJqjb2eMKIl/wDTi6g3OZvlzkxtAB9SwVNVSCVGsW5nW3/aXuhcJ1FO+w9JoaGE5DwmP/Le+q3f4Zz2pMBohEClFCaqqCQCNe29gTYk8bCWVFutfnJeMGqucrcM5JnPWra64zJORJxR615XYzRa1FYEayuQWGQNwbixtcAcLywxQ3wuAe4Iizqy+hrMs9s9Q0MEVkTXVGILrrfMQN52kcuctEogWCqFA3DIS4OGvI9WjYy7rV+omMz4znTilr0UF81V2HPVANvATnGDB1zltU28R9jOo9JKGsEXaSlQBRnrZAkeAnMcCxyHInsymvx2+2LyTnFtRqXF941PLWP0E7BTzVTxAPiJx3R6Em3Gw/8AU/edkwy2RRwUek65+s+4VhBgQzCNCy3Iy0deeYT14KeEdqzwEWB8JaPURAsdaAobTl34iUv85eafWdScTn34gYe70m5Mp7ypH1k6+Hj6xVJMlPcfEfeWLkW1eRv5e++QqjlB22Pd7AgMXibvcb/Q/wB5DsTDDr2/Tf35y2oZhjsyHqPsZT4Nrsfe+TBXtl72CFOOl6GqDVXsEvvjACYbQeIOon7R6S/GJynn/LXpW9kG0jiASFY2Xae6Dw9VAcje8E7h9ovC0MKp/L5RerTnqJOKxSAZSHh8SjMNTv27Id8OurktpFKkbI76o+xari7CxkOvi7mVlTXJybPhGgNfOP6mXnUfpHpkIyCxLPTrIhFuqWQKGJ2gC98s8pgqKAC+y6n1UW8DL7pTU1q6J+imzHsY/wDyJn8Q+zs8Nnvum7E/WPO1e6rRaEQPXRBtZ79g2+k6ss5V+HFIviy52JTY9hYqo8tadXtLzHHV9m3ngYrRqy0EYxLTzievACARDFWKRA3kaeJjbTwgDjML+Ib6qpzc+QG/vm6M5p+ImmFZlogXKElmuCLspGrbiL38JOvh5+sXjK1yOwiRC0XWuYw7ZDsk4Ns27rQuIfZ2+ds5GpGw77+URngG90Ab007LS3qUmtcNY33i8zHRfHKVCXzE1avdZi3OavW/GpcxL0dgGcACsFe+Y1RbM7jfPKXFHo1WNiKym98yG3HLfMupKm47xLjR2M4OUyO29s/SdMfjf4v8dfc3/wBWjdGarWNSsLXtYA5Z2uL5St0roSjTT5y7kWA1rC9yCctwHpJeJ0gSM6u3co4SlZi7XN7czcnlL1ZC/Hdn7X1/wmEwqoCQBc74ypbaZLY5TK9LdIFKeqoN3OrfOyi1znxtl4zlnP5aRvUzLWV0hpDXr1Km49Vf2DIeIHnIdWoSAOXjnAomdoRt3d55/Wa2FuvwpXr1z/TT/wBzTp1py/8AC6parUXigP8ApYD/AJTp8vPxy19DcRyiOKxspJlSB1oVxBWgfEq0SEAnisCDIiARxErNNaYpYZNdz2KNrHgIUInSvTa4akTfrsDqAcePZON4ks92JuxJJJ2knfLfT+n3xT6zAKovqqN17Zk7zkJTtRbt53nO3tdc55EYJCJRPdvO4R+pxisxawGyNQE84yhmAXy9n7S96KdHWxT3YEUlzY5jW2WQHxigB0Xo2olIYnYjPqLxbIkt2ZWmq0fjLgAy66WUUShTpoAqhhZRsAVT95mqNIjZOHmk60eHsi/RQZKoYdTtEp8Niiu2WFHSaDlM3OVqmk9sIu4QfwrQL6WTcRAvjssgT5Dx+0fLaLrkFxlYKPpvJ3ASyXo0tXDFKq3NQaxO9DtUjgR95G6N6MavV13zVM7buSgeZm8RZq8OOe2Ly676fNmmdGPhqvw6gzU5NsDpfJh9t0gVNvdPoDpl0Vp4ylq/K63KP+kkbDxU7x2cJwjSWAqUXanUXVdDqsOzYQd4IzBnZxW3Q7H/AAMTTYnqkFW/aSAfoZ21CGFxmJ884Zth/MuYv+b9S94nVeg3SJaifCZuumy/5l3W5jf2QnpGp1sIxhCGNIlpCIjdWFIi2iAiCI4nljmEaQTOQdPHdsS+sTZclG61gcp1XSmOShTao5sq/XdOM6X0iKrs52sSTvsL5D08JGnTEVj0iFBO85CIiMRHVcTc2G7L72h8PVGy15LojClxh6NO1ydwuYVUubnw97pIwmAeu4oUx1msXO5F4n7dkAZoDQT4qqES4UWLv+kcBz5TuWiNEJRpLTVbKoAH3PORei+gEw1JUQcyx2seJmhZcpcHHOOmjkYikm4I7HvKgehlfTpZQnSatr45zuQKg7hc+bGGw4mLza7qtniz+ptLDQ3+FG+SUWK0z9duI6YcDO08yZgAb/GTAsm6DwmvWBIyTrHt2L9+6dMT8rIndklrTaKwgp01Tfta28nbJ5Fp6kM4Q2noScefr2BeYj8ReiwxNL41Jf8AOpgmw2ugzKcyNo7xvm7anGGmYyfLYU5cOP1ljop3R1dDZhnlv5TYdNeiL0q7vRUlHJcILXUk3YAHaAb2tna2UyWHYKd4sTu2HmDnJojrfR7Tq1VCtk9hcHf2S+nExjGQq9NsxuF8vHdynROivShMQAj9VwNm5v28+UeajU/saVp6K0SUk8RWMSY7pdp19RqdG+9XcZ5j5kTmPzNsW4G0x28KTtU34h6WFXVpIbqhJdgcibWAHG2ec568m18UXGezkM2le73PDlOfuu0knoejh77wOZ+gktEUZDM+9sgICdl4UhgQi3LNYWXMkk2A7TwiNYU1Z3FOmuvUY2VRmL8z4+E670O6Krh063WdrF3/AFNwH9I3TIaC+Bo1deqpqV2yOqR1BvWnfbb8zbDlnOi9G+k2GxQtTYq4FzTcar24jc4/aTKgXaJaCxLWBMlash4sjZcX+sYjlVSg3xXZhm7a/wDr61vO3dJ2GTOTNL4Ymq4AzHWA4q2eXGxv58omHo2Gc87cs1W/x3uT9WMG20LUcASMhN+c5uqY1gJpej2C1EuwN2Nzx5CUuhsAzuGYdRM9nzHcBx/ibCkth5zX4Mf7Vk82/wDWCotoqxoaKeM1MxSYxmi3niYBUdIcD8SkbfMl2HZbMeGfcJzurgqVa+uACcy3E8Tb1GfbsnWGM590n0aaFTXQdRySP6W2svLiOXZFS1GA0toipSYAqSG2WIO02BVtjKdxFs8iAbXqMNiGpvkSCDkRkQQfIgzoNfVq0zTY2BGRsLoeIvv3c5kNL6GekFdyCS5XWvfX6usG4jftzveCZf5XU+jGljicOrt84yfmeI7RLiY78OSPguN+sD3Zged5sbSp8RYFjNbUfU+bVbV/dY2nKMfi6JV9Z7kFkp0wSclNtZ7bBvAO0knM7Oh9KdKGhh3dT1yCqb+sRYG3Lb3Tii0XzuCP3XF+87ZOqec/0VMiSNw8j/aBRQBrHjlJiKLaw4WI4bpBrZd1rxR1SnqBMlF2twvnvMm6BqU6F67kNVzFJBnqnYzufy22DvO4SqwxLvnn6dssvhjK3f8ASMunVnd213NyfADcBwEn6KosHVgSCM1YEggjeCIPUsJfaMw4C397oG32iNKv8JPiFnLXzy1rXNr8RLFaynfa+4j2JT6Np3RL7kUDttn5yxWnHTU+n0s9Nt5V1J/Ywt/ukcsG2nVPG1x2nhJnSIHWpnd1vEhfsZWh5g815qtvincx58ObneBvz637cusPeUKiKh/W3DPVB532nlAsRylpofDkEPYE/kBG/wDVblJxn8tckPduZ21pdFYUog1vmObdp3d2QlbpnpHSoNqEM771S3VG7WJNhc7hc8oTEuQrM7EjmcgAMyALCYmqNdy5yudm63AW4T0OcnGHV99Wz9MqxvqUUUbtdnY+VoNOl+K/RS8H2f65WhO76T1gPe0wT1b/AP7Osou9BCP6HYHwIMLQ6dIfnoVF3dVkb1IlAw2wSU89n9oujrYp0zw1s/iD/wAD6gkSl6RdIExCKiIwUNrFmAFyAQAACcuttMpWAG7cPSJDo6FqEQ4cEarAMp3MLie1Y5U2RDi26PNSpKyqCtzfbrd2Yvxlt/j/AOk/6k+8z2GXZzllq8z4ypUWMN0iwlTXLV6hGuqtTqEE0zcdZCRfUIy5TL4lnG03B2Zg7Oe+doSpRClHZCu9Ta1u/IiYfpnQwC0r4d0+JrA6im4ZTe+WwcYrF5t+MPTrMuw9o49sDUb3/aSsLhw5uchvz+8mDAM5yAUczme6KU0bRovc2EtsNTgsNgwhbVud17ywppsPGURAs0mApEqFG0m3jaUVJMwPe6a3QNO7oOd/C5+kUNr6GHCqANwhNWSEWDtGFH0lTqoeDDzD/aUyiaDT6XQHgw+o/wCUolBNgouTkBzmHzz927w39RNH4M1Xt+UZt2cBzOya+jhwuzKwsOA7OyN0RgBSTO2sRcnixyHdnYfzJFVwikk2CgknzJmrw+P8M+/tZ/Lv8r/xQdJsVZRTXacz+0bB3n0mc3WhsXiTUdnO83A4DcPC0EB4To4vXA974xhvjj7/ALRLQIM8/wCRBV3sL37OfECFrOALnjkBtJ975FRC5ufLZblJBqgsYdUkhKdvfbPXsTAwwkIadsoREjhnc8rdwgTyZQnxIy0S3u0ouIuF6EXFnquL7bEHwv8AWO0p0OwlHDuyqz1Cuqju5aznYQosuW3Zum0WZ7pTVuUTtY+g+sLJIUt1XOsPo0q5BAHDMmw5SaaVpZOg1u4Rr0xfl7998mLqpSmc/e+HZPfKGSnm2Uey5Xh0uB4dc8+6bHoxT/zByUn0EyeHTPZ3zbdFU67HgtvP+IZ+m1ajKDqiGial5RqzSlO9Jxyv4Z/SRejejwSajDJcl7d5+njLavR1kdf1KwHbsk3DUAiKg2KB39vrIuPy3NX+Ok3zNk/pX/mZzpPi7AUwc2zb9o2eJ9JfYiqFGsTYAXJ5DOYHGYku7OfzHIcAMh5es6WuVAsIt/CKTwjT5RETnEdwASffCPZrZnYPfjIrkuc+4coAIKXa598hJtFLe/fGeopCMM/fvdJBt/fGIq7Y7Vz/AIjar6oJ5WlAxnubD37+kImdzu3dl5Hw63z9kZfWFWpcm2YG0/QcYAZBG9/nHBuPu0blANWjTKacqa1ZuWXgPuTNLTa0x+IqaxZuJJ8ST9YtUsob7fL0iPaOYTyg+98lVRdWznn/ABHOu6Edev3fT+Iji0AbhRdht9ibnomPnP7frMPhx1uyb3oqMnP7fQyshoSMoRRlGWj2jMFsr9h+8kE9XPaYOsPr6GJiqoFyTYKLk8ANsoKLpNi7KEG1jc/tH3PpMzJOOxRqOz7jkOQGweEAJKaS0aeOwWz5DnHHjsHvykGpV19l9QbP6v4H2MAcahc3sdUXsPqfCGpLls92gUFyRyHnJirYQBV+0aD7vCj37741T78oB4Ltldjq2xed/flJ9Vtvb/H2lTU61W25VHnf6CATUpE2G4cO2SVUAWG60Al+O6FU+sAd28TG3PsRb5D3vntU+7QC9xr6tNz/AEnzymQdpqdLf9o9o9ZksRs8ZOr7GZ6Oi04MH1hV2+HoYjDq5EEcd/L2Y11hq3y9/wBYNt8YCp/MJvuinyOOBHplMGNvdNz0R2P2J/yhkNMBHLujDHJt8ZcBuIew2bs5nukmNy+GpzNtY8F3DvPpL3FbO4zEY1yajkm92b1tFRUdVinbPN9ZGxjn4ZN9v1MCCrPrnVHyjaf1W3DlHBdw8ImFGQ7PpC0vv9YASlTsO+EPsdkcuwdsakAcRl74/wBoha2fAfSeWCf6fWAAqPs97ZXUX67nmB4KJNf6SHhtrfu+0AsUbq32QlPPPtt5yI+0D3tktN3fACAegj9SDGyOvAP/2Q==", name: "Yousaf" },
        { id: 5, src: "https://www.shutterstock.com/image-photo/headshot-successful-smiling-cheerful-african-600nw-567772042.jpg", name: "Hussam" },
      ];

      const router = useRouter();

      const handleAvatarClick = (id: number) => {
        router.push(`/member`);
      };
    
      return (
        <div className="page-container">
      <h1 className="group-heading">Group: {groupName}</h1>
      <div className="avatar-container">
        {avatars.map((avatar, index) => (
          <div className="avatar-item" key={avatar.id}>
         
            {index > 0 && <div className="strand" />}
          
            <a className="avatar-link" onClick={() => handleAvatarClick(avatar.id)}>
            
              <Avatar
                src={avatar.src}
                name={avatar.name}
                className="large-avatar"
                data-avatar-id={avatar.id}
              />

              <div className="avatar-name">{avatar.name}</div>
             
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}


// href={`#${avatar.id}`}

// router.push(`/member?id=${id}`);