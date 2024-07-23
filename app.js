import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQEAAADECAMAAACoYGR8AAABaFBMVEX////3uSJKniJjCgxeAACTbGxDnB+Ls0fyuiZiBglgAAD4uSGmYSpbAABhABFtHiBYAACot0RmfDNjAAD48/NVAADy+O9PAADl2Nj69vZgAAprsFSyj5DMs7RnfTWQVleCPkCFR0ju5OSieXrZyMm6nZ34wTrj1dX7vBn857XZxcX98dP//PT4xUt5LjD61HujcnOXyYP+9uP3tQD97sz84qbtrijFqapYAAxpFhhVpC+72q24mppJAAD7353724/5yVlzIxHVlzDnpiGbZWaORy7JiS/603bipC9xHhm0dDx1tWHj8NyMwXReqTs7mQDC3rXZ69HAfyyqhod9LxqIOxqXTiF7Kx/DgCF4MzX6zWa7fDmjZDNrFCF+NyHAhD+WUiylZDaDOy6saSSVTSfVmkG0cSBvHCl4aj2dqUlucDdqKx5aljCjzo9zPC9dhCptTixtQih5i1FmVCdcYyCKjUWubj+fWCCqqHabAAAWCklEQVR4nO1dC1vbRrq2keBYUmTpVDLIilTZ8kXGF+FwsREYzBrhGBIg4KasoZA0Sff07IZms+2e/v0zM7rbJovTBISr98kTZF1G873z3WY0I8ViESJEiBAhQoQIESJEiBAhQoQIESJEuC9UlwM/K9V7qsc9YtUvc2X13upxf1he9Lar239CFYjFtj07WF38xHnTi0VP7HblHutxf6i0na3qzvKnTpxaLO84W9Xan5SBhLO1+idloLLiBIDFop+BdPo+anMfWPUYKPk8Ia9NLQO8GvzdXnG2Fld80bAs3FWF7h75IAU11w9UVpbcjChd4O+wSncMrez/tUqdO5vVFc8VluW7rNIdQ236m7e94uYDsUTcNQMpQNO0QdK87Uqx5PWGnq6c22aQNvN3XKk7Rd+n4ds+zY+tlRJ2NOCVqdaBXMHdXK6tLHkHKsWVtqUEarZ517W6Q6TNlrvdpkr+IYHzUtFSAl6pT206EIsJGbd9K0Wq5j+0SFGWSqTrmaG0YZogG46NV5dW4oEhgeoOZSuBxE2xGZi6k+6tFks7wVGhbaq0jTZkcnrNQONMJx84pxJDo0LLNcqKDSrDTG08zNGSvbWaoM6HBwaXqLilBArXv9Nq3R003Wnc6tNSfGRgcLVIWYYhY/qU9o3quGPglQQ1OixWPS8lUHxUFVwaPjgVUHHSiQRtimqPnrC9UrIUo0VPZ0CcZV0fDyLfmAckq6WSxYuamUolyHOEm/DXVnbGPCBZLtoMxHIkc1fVujukFbbudo1rTicggOrOihUMYmWDnL7uUZ6jPaHOV9bGnALSQjtAqBm6NeaEhw2J9in29sq4h2TVnZozRlBnpy4lSNdTPpmWi+N0YLnm8tJKTZ0r5E3Wn+qujfMDq97OJj11g4XpOhfI8xZHnxH5Z1Q0uenrHBWMYKb7yekC6f4UdpD5rBb8LeTLstwsSP2+1GrKcjkveHmgOpWdw7ITDHk+36orGZ3hSBq3QZOcoWeUulRWp/hxCRJNlaWswXEkAE6IfuBwH8dh2b48pT1D+ERUMjMESRIEkD1pGPt/Afju6uq778DffcNIiiI4BGjQFSk/haqgyqaOxAfSX569/P7RxWmnt2uj1+lePPr+5dklYEGEZzFmc7q6h2mtP8BxEkiP7e89+munFy9BUHEbFPoZ73X++nZvH4Mk4LSeK09NSExruQFHYpiYPHt30WtA6RPF2s75Unt7DWK73V4636kVE5CFRu/i3XeGSGDAGnL56eBAyBk0bP7L190ekHGltNNeWx2dQlpdXl1s78RXwCmN7g+XNFQELjcFfUS+r+MkaP6rA9j4iZ2l1eonsqFqFbCQgKrw6soQMYI0+g/dH8gZ2P7re6cN0Pq1bWcm7XJlcRHq/za0g8XVSiBJrmzXgCYkuntJkQD+4EHnh4IJ7F803nUaVKnYhppfXa6sLe0UE8j7rQBYDhH4haXt1WVHO6qVdg0oQuc10AOSVB5uiihnYPTbP91F8gPBVtee1oDsEHE/7D3F8223ywQ5oBqnVzAw6M2H6RHVPlSA/YMeVaptLwPx2zVg4UOyDxGxQhXP12wvubxWo6jGxRmggKs/RG+g1jFAwFU3XiouVarLa+eJ+Kek91iIF5/amlBpF6l4Zw+miubDS5UFhSPE5Pe9ErVTQWZ9G/Gd/Chea1uKsPoUxMYfQHpAZh+aM8hnQQjYvwAKsLa8Cpry1uI7mpBYQnGjulYrxbv7wCEyDys1EAYwBgALqFWW24kSFZTup85/JoRaSTxFEwoqO6VS9wxQoD8kLRAGOCbudUpUu7oYLw35/d6P63sNbx+F/o01Buop8gfteKn3GlDAaf/pvqGBmoEE9Kj4duXpyrB43TepN13f787vv/duUolSEa2+WbMpGDwUClQFEPBul0qsrY1p3r3LRz4NiDderq+/TtxEAQik8AnjYrHUABTgmYcREfgcB6Jgjyq2n46TrNcJ/Gy8FInLG5UAcIDUYLFI7e4BLag/iJGTJoaLDCBg6XwkAsDMb3jnhYiJP5ZuZACoAfQGQAt6b0SCewhPUvI6SRhdKnFeG5EFtH9jVCfORHF/dLdzCfwPWsJaotQxQIIc/kcpfB3EwUeg1sVRaTpX+wEfYO19JIrG8N54fLf76uLA9phUbTFWbZdKb2FmFHo7KIC+0FWCSoy4ACp+aoiiOJIKUL3X+tthK6B6b1hw8vqp/TOxFos9hd6QIMNuB7xOivtDUlq/qFOQ2YlnjtOjPI/Y6I2e3EliAOxbZ29iMbZcK/X2RXIQ8nggkUTy0VCDWkZOXUICHLGpxuv1rt3yPt/YO7AYonp6an19nXG5hBSsrsQvkgRZv28ZPwl1QHrNbNe98+YU7ii9SSb3fNrRvWRGLeLVwp599W630+vt+g4lVmPnpQboKGKhVgIJdAgvhqTqJK+go6N6b98GuDkVmZEQ0Hidumq41hBkslatFEunIB6EenYF8AJXvWEv8C55EXel8uHRaBAExnHWG95po3Qea0MlIPUQD5eUOSL5drjmVNfYczYDHDTGyEqN2+lQsFgpAs3B8BDnBH0c+LrRDLfjSDWUEI3LhYMkBX5RxcoStXsmksp9y3kj+AwpvhuT3lFOiLt6NNFICUgidwMUtBcT8d/DbAYa6BNe3ChPPP5j8mASBigQL177cyWquLgDfSEXWjMo0Fjy5m4e1dv38qGAepc6Z51xV3T3jVeBbJFaWir1rsTwTro1cfHNaIbvyvlq3fGSpd5PDW/olGrsrXfHXNDZTw5H1tpSMf4OOIKQdg7SIB0azgeDIjUch8Ak93/ouV2H0/XX44g7ZUaMhgI9zgOWZELqCFSdTP7tUwy48vyNBf0n48AR+0IfZwRUozPCC1WrxbssRoY0LSwb5OXpJ8Y6PDk6jAg6CZdu4Bw/PDB2iL0Y761jbEhHzmWMYLq3c/bd3/dF0dfvudVFCAlq9xJjw/k8OV0nxdHOzliA1u1d7J1OIrl3beN/CNwMpSuUQa9ofFT7smjoBIGFcfY9GiP/+X//++vjZzheGEJfmAMq8PPM3ESY2djYODo6egzwLIjHn8DM3wmMDt+4eR4jxX+8n5kQFgNHNgOHh4dPnjy5vr7e3Hzx4uTk5Pnz+XG4nvlFJIywOUNgA0Ty27lJGXAwRj+OEQBJFkGQHIub+fnHH0JoBxJGiP/c+FwCJiFp5nD+ZOZXkeByoZpaozHABj58TQJ8VBzOP3n/D5HAwtRD5E2SwP5+NwRACk4efwPsIBui3kETxIGPt3GDn+0ogqU8ud74COwgPEOm6oAkmA+ejDf5g7mNx7dwFeCkm4jasG8wd/j4A7ADLjSzSnLABn6FFTsGnvvx9Yvn12NlmDvanH++CeSbu0nCOcDR9cn8i6Oxl89cPz+5fna0MXM8N3O08ZuIkWZInGGeJvCP70Hkenb94sSaC/j82fGwEHNzT+atYy+eHB2PHAbHjzcON5+jU0DIHzl+/PgkZl9/fQgKmPkoYnhhbIXuGrxCEsl/gcrPz/v2bg6145wjAMT8yTVUhWDjPznxXf/8MKgocxvX/tLnAY3/2idILhTOUCID6ijYb9cLyDA3swkE4GXZrXH1ZPNw4xieAhp/7tm1J75aRutLNo+OfQQ9O7GPeXlQuk+HIznWOIK05vfwar5Vz+iYLqFqeeYMshggQFrOcHANkeZUGjYkcI1Hz4D62Lt4oQUX42TgG/qeP3G8CXQg6GhzgDEZRZJVHjKuAuULwat7eBPHQDXUvCyZGQwuIwO6ab9d7eQQmfsxEkCtGyRaSGVAEeyrgWf0iV9umQwoAa4vgSXMbz4+nvMpgGCCEuCKNExXcs2yGitjgKx7twOJIwi9rgz2cRoHdUcgcMxeGPHiMbDwa+DeVImhnaMkDVShoAX0lxcK5oBzi4AlCNAjHs25CuAvAadBGdm6jmP4fduBNiBhneAiMswHklRk5BqeHz4DAqTLJkEGjxu60irb7afmm+bA4Eh/ESSRlXngLZ5ZCjBcAmFwOM6hjftNjuGsIdgmaLGkHwRO5ND8x+o8XGmE4QGC7HbkgDKrqtxXDE9/fCdwdWgKKLyqfVcBLOAFuZ/F4NJN/H6T46ZBwAVRTNbsy3U8KAE3kJGC8oUMGTzkCUlig4FBjkjvHGZaSLq0nCXJ4CE4jYJXm7ksQ5K5eyRAzaRYzmyVkU3n2JFGNIEAZXO0fQMk3HwQAw1cBnfJceTwAee9Nrwm5zL3OHYuS7Lnh0BwGhYP56TR2k8EkjRbxogJhXOGsWYCT0AMgcTJ4V2TYkwRwAhCuOCibOBAfoO5Axgi6BEw958KBSEAExCZX3/75hb49lv0nwNr17e3udLCb7+CnnHo5hXCxOjjh41bDJC7A8RHvgFwb5j80MGTm3D4+Oj9P4EvCNc4YRqk6J89Vu6Q4RKABL1G2LTxwgYcQ58/OXz/USQzIegUeYAzKf/5B4bArD7iuAFzdzjFpevZZmz+6DcRN+69R+CHmvljDExE1vHm8/AxEMviwAruhgLQWX72/heRHITKCmItghD1b27hCb8ENj78ImJhm2YPn5qJxsd//9cd4N8fGUDA/Q8MDEHI4ARB/5i4A7wVwZ3uszNwA7ScQYgvGxQVb1BfDw04904kDDOMHQO+z4lwHlHjpxuXD/5RUHBC3u4lQefCZgIWNAaHa6zip7ebTPQ5DHRO4/ELFsPD1y9CSGdJ8Ww3TnX/72sxED/olhrvxPB5QQcyi4mn0FA7t5lVODlKnb0GnFkd3nnFKlxiskvFu296X4OCUm/vFPpBkglZt9CHFg7XmFDUj4CCL20JVKn35lE8fprE6BCvNkOrDbvAGR68OW181nzJG+WPN07fHDRKnTMxtPOqEZoYIV7B9j/d2zvtfTEOqHgPFhiHbhDjwjibEiHNq6qWhe+f6VBUqdG5OHh186qpydB7dXDRaZSo3l4SI3RNDd2bLHlVK8sFCb5704BDuWddZAKNm1aUTw5QFMgHuy9FWDx6n2dTLmvqfY8SwUbPy60clBwjaRrH7ecaYvLl74++OH5/dynaI+g4fG5o6Fml3m/JeZXn75qKtCrARs+Z2QFjoEdXw489xORXgBi8CYHebIoZzAAwIaG33d6BcaSFclPqzyo6R6dSLEu7b5u9T9A0zaZS8GGymZOaZeFr8cBDhZ99EAA8aGHzlREiRIgQIUKECBEiRIgQAUH44oPc2tcdM9VgZzjX8qotSGCH/8Pdsfzs8BNcOWd1S+1uauBw1nCHcvKBZx7N2Wa6NTvb8kZ6ZMWbKpsOPCRUZ2fdjm+a0H1HyrPDz9Ja1mI03u02T/KwLd3cZ7N9STK5LXt0vjxYyPSlvsLiklujZmro41Oqbq974disXJZzC745b2Uy5bKXX/CvEJLBL15nvSUzqj7wSW0M/DdhOXeziad8j5Cl1NBXEQXMqp3KsUpLkqScMoHKqApeR+OQab5lzVaRyAz6wExaVVIZh0uJZoND1xJNW3fJ0DnrN+O2mEl7L5PSONKnS3n4TgnNoN12z/kli2VY/wsXOLfd01ka982qzuFDX0MDOxADgFxL5SYYTVR1r7ks8y0seK/HzKVwu4ImTvobK8ZzpP0FtyyL6qYO3O/0qQsm7S4Q1DCS8ywkj6reTDnfdcwHP+6XJdlZ7xc2cC9LmbQ3nYpX8OArPFWWSKGjfIad+EHjyBcW86T/u2RZ2n5sM2Aw2l9ZiWPsKxWLgZhCO+8O6jOq7j7vEgySJF2rzFvvWlPsYnldCbSWQpKeesSMjLs/IxiebLzOBN9PUscMFpXLZydmoJkanqdlN6lTY85uJK4+i+O+2eVcXWEtIR0G6rStJCrThzZinyxgpk67D0DzlkmounVxPxUMGgpWZ92PRceYjL2hcc1YzvtwpEr2FdznMQSun7FsdHIG+KC8sIpBE0srOGotfqsp+JunTsZmacvWHQZM58u9hQUVsOBUReCagoGTtgrbDMTKNNQgmR6aNK1wMR8FLgM5UActhTsnC1v5csqnu1kd6GrOlmdCBjSOHVq7U6DZgBvt06jO2lYeqK5riirXAkesCvqswGoWJhuDfNiWKnCFWJlz2HEYgOWqMWb45XuAAV6hnTZwGEgjL6jTzlJHeUuNDXDX8WrAkyn07OcxILPs0DylHM4OnYHaqQnaVeBo0zlL52MtVud9DACXWrCvgF5Oc+SADMRkjraszWUAeHfFxIZjFmAASEGTzQADLWQrMu3UVUrBgOvKagLm6ywiHFxrwi8J1m+dkUn0EAPp2SEG8pZSShwPv+duv1VfhcLKrKH5GOizGdREaRPVJa3YKoIYANW3/KTLAIwRox/4hAzA799akcRmgM+ixge7be9qEvBU2n53YT4FGJdY5IT4LK5nMwOGvnU0BAwEUz3IQKBhBMvgcrAJ1RRu1aHOpKHyWVEOMSD0F2w9F1KWgQKZNY+BWAtHvs9jANybGKkPYiCmGjSjeQyUbUuVnLiUhWYGmsby0VkYM+3mAFYA767ePimXWXro3QZ9mg5wkresQEHNkLOkyqP3JqZTdmTDjYE+UJzP8NRTeQFC4yznZDMAHAxsQh8DBRq7gYGYYEUPm4EMgQoU8rTl/dIDVHAdRymZjEKtmkJ/PscT4kPOqInTgXXuMgtbWs0gogQGeQLTikukdaZC1wWv3wKCwIIFlkRm7jAA6APt42OgdTMDMYGGfsNiQGC9EtGNVes1VXkOtV4WCcCTSFEmZwAEOyzoCFTAid+IcsicHTEkFiRz2palJXbWowQCquQkkU5AdBkAnoKVtNsxABPnQVrPoBq4nQiNQPlr2S6jDt2SvGAtBWcQHZ+REZVT+FBCkKNJX79KzSAPn7djMQ91ZjZrUaTQaCPAQNrI+kqCWYvHQBoUbXK3YwCIiStIB1TOy5OzSAVlO6UGsakey1rhCYaW2GcxAHXT55HTMLWmfWliP4U0opyynQNwaH3HefZpY4QBecvXy0jBxtI4z6pMFvfrwE2eEAFQgGfAX2nLaxBgkuBHwfnOC8gpcs62lTJ+DgMwxBUctRegJqkGazp617SCDHDD9o34AYnqZdUHZb5Z35S3tGL4kmzULppvOhRv0n4GPHHdK3BvW0Z34hlfR5gfQCXIOTm2CnoRzr1bNB37vJ4RkJJcUNBbArS+paKqsqWjd0OUZxfstc4K7sSXgtutg6MAkBfdzZNg188fWlAOo+G+rlc6w/qiITlSl0zK96OQyoAyUv7EWYIZa9Z9iXGOdb+v3cRTPOodt9D6XGmiNYp8QTFInMS5gaPO5VkGLvXGFKcc3P2WOT9w5ZVTC1BeOsW4rlNf8N+5TKeysfKWr78bU7PuCbMLqZFhDHLLv0vSY7wR+Ip6M7VQV1m38wr7YDYKC/DWKpuicZZNpbYmXKWZFvIA/qE4VQM7BEcyvlXwwp23BS4Bf8CJbjn5fGAMARzi1Xwg2HiXgzuMzP4I7kprsIjAQAC4pdDyPo4r+CsjoArYiCaWRIgQIUKECBEiRIgQIUKECBEiRIgwDv8PpodY21QWdAoAAAAASUVORK5CYII="
          alt="logo"
          className="logo"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestroCard = ({ resObj }) => {
  console.log("props", resObj);
  const { name, cloudinaryImageId, totalRatingsString, avgRating, slaString } =
    resObj.info;
  return (
    <div className="restro-card">
      <div className="restro-image-container">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="restro-image"
          className="restro-image"
        />
      </div>
      <div className="restro-info">
        <h3 className="resName">{name}</h3>

        <h3>{avgRating}</h3>

        <h3>{slaString}</h3>

        <h4 className="cuisines">{totalRatingsString}</h4>
        <h6 className="area">Jayanagar</h6>
      </div>
    </div>
  );
};
const restaurants = [
  {
    info: {
      id: "435405",
      name: "Chaayos Chai+Snacks=Relax",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG",
      locality: "Cunningham Road",
      areaName: "Central Bangalore",
      costForTwo: "₹250 for two",
      cuisines: [
        "Bakery",
        "Beverages",
        "Chaat",
        "Desserts",
        "Home Food",
        "Italian",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "Sweets",
      ],
      avgRating: 4.5,
      parentId: "281782",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-23 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
            description: "Delivery!",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹199",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "100+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-cunningham-road-central-bangalore-bangalore-435405",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "237472",
      name: "Edesia by Freshmenu",
      cloudinaryImageId: "9c9756c9c390f8b5810542429fd50276",
      locality: "AGA abdullah Street",
      areaName: "Richmond Town",
      costForTwo: "₹150 for two",
      cuisines: ["Desserts", "Bakery", "Fast Food"],
      avgRating: 4.2,
      parentId: "11246",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-23 23:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/edesia-by-freshmenu-aga-abdullah-street-richmond-town-bangalore-237472",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "696230",
      name: "ITC Master Chef Creations",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/21/056aad5c-08e5-4fba-9037-850bc6d37055_696230.JPG",
      locality: "Shivaji Nagar",
      areaName: "Dispensary Rd",
      costForTwo: "₹650 for two",
      cuisines: [
        "North Indian",
        "Biryani",
        "Kebabs",
        "Mediterranean",
        "Mughlai",
      ],
      avgRating: 4.5,
      parentId: "11992",
      avgRatingString: "4.5",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-24 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/itc-master-chef-creations-shivaji-nagar-dispensary-rd-bangalore-696230",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "696231",
      name: "ITC Sunfeast Baked Creations",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/8/5ed6e94f-2d91-4210-87ae-aa6a5fa1402d_696231.jpg",
      locality: "Shivaji Nagar",
      areaName: "Dispensary Rd",
      costForTwo: "₹600 for two",
      cuisines: ["Bakery", "Desserts", "Continental", "Cafe", "Snacks"],
      avgRating: 4.5,
      parentId: "12285",
      avgRatingString: "4.5",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-24 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "v1705582451/Ratnesh_Badges/Perfect_cake.png",
            shortDescription: "Perfect cake delivery",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                  shortDescription: "Perfect cake delivery",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/itc-sunfeast-baked-creations-shivaji-nagar-dispensary-rd-bangalore-696231",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "4046",
      name: "Sri Udupi Park",
      cloudinaryImageId: "tfbnpd65irvhp9iwhbtk",
      locality: "Residency Road",
      areaName: "Central Bangalore",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Chaat",
        "Beverages",
      ],
      avgRating: 4.6,
      parentId: "4284",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-23 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/sri-udupi-park-residency-road-central-bangalore-bangalore-4046",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "17376",
      name: "Glen's Bakehouse",
      cloudinaryImageId: "m6jahioyu7zrodei5pcq",
      locality: "Lavelle Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹500 for two",
      cuisines: ["Desserts", "Bakery", "Beverages", "Continental", "Italian"],
      avgRating: 4.7,
      parentId: "3220",
      avgRatingString: "4.7",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-23 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Gourmet.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "v1705582451/Ratnesh_Badges/Perfect_cake.png",
            shortDescription: "Perfect cake delivery",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Gourmet.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                  shortDescription: "Perfect cake delivery",
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "10K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/glens-bakehouse-lavelle-road-ashok-nagar-bangalore-17376",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "176071",
      name: "Brahmins' Thatte Idli",
      cloudinaryImageId: "pe1savupw5miak1g0ylt",
      locality: "Vyalikaval",
      areaName: "Malleshwaram",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian"],
      avgRating: 4.5,
      veg: true,
      parentId: "1312",
      avgRatingString: "4.5",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-23 21:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/brahmins-thatte-idli-vyalikaval-malleshwaram-bangalore-176071",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "12808",
      name: "A2B - Adyar Ananda Bhavan",
      cloudinaryImageId: "pdod4o1em9potwsd22rs",
      locality: "Wilson Garden",
      areaName: "Shanti Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "North Indian", "Sweets", "Chinese"],
      avgRating: 4.6,
      veg: true,
      parentId: "22",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-23 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹75 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-wilson-garden-shanti-nagar-bangalore-12808",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "187384",
      name: "Blue Tokai Coffee Roasters",
      cloudinaryImageId: "1a0521375f07155eda2f1ed263206831",
      locality: "Infantry Road",
      areaName: "Central Bangalore",
      costForTwo: "₹600 for two",
      cuisines: ["Cafe", "Coffee", "Beverages"],
      avgRating: 4.5,
      parentId: "2682",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-23 20:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "ABOVE ₹390",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "100+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/blue-tokai-coffee-roasters-infantry-road-central-bangalore-bangalore-187384",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "464835",
      name: "Bowl Soul",
      cloudinaryImageId: "e92965cf38eeba579a1edc38a91f6419",
      locality: "AGA abdullah Street",
      areaName: "Richmond Town",
      costForTwo: "₹250 for two",
      cuisines: [
        "Indian",
        "Asian",
        "Continental",
        "Pan-Asian",
        "Chinese",
        "Mediterranean",
        "Mexican",
        "Lebanese",
        "Korean",
        "Japanese",
        "South Indian",
      ],
      avgRating: 4.3,
      parentId: "280646",
      avgRatingString: "4.3",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-23 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "EVERY ITEM",
        subHeader: "@ ₹139",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/bowl-soul-aga-abdullah-street-richmond-town-bangalore-464835",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "51835",
      name: "Aubree",
      cloudinaryImageId: "65faa4b5046cb2215fe285a8b96c9bd7",
      locality: "Timmaiah Road",
      areaName: "Shivajinagar",
      costForTwo: "₹700 for two",
      cuisines: ["Desserts", "Bakery"],
      avgRating: 4.6,
      veg: true,
      parentId: "3807",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-23 21:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "v1705582451/Ratnesh_Badges/Perfect_cake.png",
            shortDescription: "Perfect cake delivery",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "D",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                  shortDescription: "Perfect cake delivery",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/aubree-timmaiah-road-shivajinagar-bangalore-51835",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "396751",
      name: "Shravan Specials by Lunchbox",
      cloudinaryImageId: "tfoy8icqfgrzfjg2ole3",
      locality: "Residency Road",
      areaName: "Shantinagar",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "Desserts", "Beverages"],
      avgRating: 4.1,
      parentId: "21938",
      avgRatingString: "4.1",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-23 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹159",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/shravan-specials-by-lunchbox-residency-road-shantinagar-bangalore-396751",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "440123",
      name: "Great Indian Khichdi by EatFit",
      cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
      locality: "Cunnigham road",
      areaName: "Vasanth Nagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "Home Food",
        "Indian",
        "North Indian",
        "Healthy Food",
        "Snacks",
        "Desserts",
        "Rajasthani",
        "South Indian",
        "Maharashtrian",
        "Sweets",
      ],
      avgRating: 4.5,
      veg: true,
      parentId: "319582",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-24 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹149",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-cunnigham-road-vasanth-nagar-bangalore-440123",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "440151",
      name: "Home Plate by EatFit",
      cloudinaryImageId: "1d578bb732e03c6f591790eb7d2d88e2",
      locality: "Vasanth Nagar",
      areaName: "Cunningham Road",
      costForTwo: "₹250 for two",
      cuisines: [
        "North Indian",
        "Home Food",
        "Healthy Food",
        "Indian",
        "Punjabi",
        "South Indian",
        "Rajasthani",
        "Maharashtrian",
        "Snacks",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.2,
      parentId: "301197",
      avgRatingString: "4.2",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-24 01:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/home-plate-by-eatfit-vasanth-nagar-cunningham-road-bangalore-440151",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "558773",
      name: "HRX by EatFit",
      cloudinaryImageId: "d8d85afa5c5e92461d30ff2ca867a587",
      locality: "Ali Asker Road",
      areaName: "Cunningham Road",
      costForTwo: "₹450 for two",
      cuisines: ["Healthy Food", "Salads", "Keto", "Pastas"],
      avgRating: 4.5,
      parentId: "335529",
      avgRatingString: "4.5",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-24 01:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/hrx-by-eatfit-ali-asker-road-cunningham-road-bangalore-558773",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "160120",
      name: "Asha Sweet Center - Since 1951",
      cloudinaryImageId: "egm3aym4fa73hst2tv9b",
      locality: "Gandhi Bazaar",
      areaName: "Basavanagudi",
      costForTwo: "₹250 for two",
      cuisines: ["Sweets", "Snacks", "Fast Food", "Bakery", "Beverages"],
      avgRating: 4.6,
      veg: true,
      parentId: "472555",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-23 21:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/asha-sweet-center-since-1951-gandhi-bazaar-basavanagudi-bangalore-160120",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "481803",
      name: "Peppy Parathas & Rolls By Chai Point",
      cloudinaryImageId: "isou6i5vq3epvqo1caov",
      locality: "Ashok Nagar",
      areaName: "Church Street",
      costForTwo: "₹150 for two",
      cuisines: [
        "Bakery",
        "Beverages",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "South Indian",
        "Punjabi",
        "Chaat",
        "Indian",
        "American",
        "Fast Food",
        "Desserts",
        "Cafe",
        "Healthy Food",
        "Home Food",
        "North Indian",
      ],
      avgRating: 4.9,
      parentId: "289265",
      avgRatingString: "4.9",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-23 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/peppy-parathas-and-rolls-by-chai-point-ashok-nagar-church-street-bangalore-481803",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "312660",
      name: "Samosa Party",
      cloudinaryImageId: "ixgxvfu6ggvw1w1awgr1",
      locality: "Brigade Road",
      areaName: "Brigade Road",
      costForTwo: "₹150 for two",
      cuisines: [
        "Fast Food",
        "Snacks",
        "Beverages",
        "Chaat",
        "North Indian",
        "Street Food",
        "Sweets",
        "Desserts",
        "Punjabi",
        "Bakery",
      ],
      avgRating: 4.6,
      parentId: "6364",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-23 22:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "20+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/samosa-party-brigade-road-bangalore-312660",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "792448",
      name: "Suchali's Artisan Bakehouse",
      cloudinaryImageId: "f9f262d0c80a41de4c1a890eb36d1085",
      locality: "Shivajinagara",
      areaName: "Central Bangalore",
      costForTwo: "₹600 for two",
      cuisines: ["Bakery", "Desserts", "Beverages"],
      avgRating: 4.2,
      parentId: "196351",
      avgRatingString: "4.2",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-23 20:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹75 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/suchalis-artisan-bakehouse-shivajinagara-central-bangalore-bangalore-792448",
      type: "WEBLINK",
    },
  },
];
const Body = () => {
  return (
    <div className="Body">
      <div className="search-container">
        <div className="search">Search</div>
      </div>
      <div className="res-container">
        {restaurants.map((res) => (
          <RestroCard resObj={res} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};
const App = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
