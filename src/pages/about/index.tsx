import Header from "../../component/header";
import "./about.scss";

function About() {
  const newLists = [
    {
      id: 1,
      title:
        "Woman bakes expletive-laden pies to ‘get a rise’ out of her grandmother in annual tradition",
      description:
        "“What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition,” wrote Jess Lydon.",
      images:
        "https://happynuts.vn/wp-content/uploads/2023/03/buffet-hai-san-quan-1-6.jpg",
    },
    {
      id: 2,
      title:
        "Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans",
      description:
        "Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.",
      images:
        "https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwwn4nompsd7d9",
    },
    {
      id: 3,
      title: "Burger King is testing a new breakfast sandwich",
      description: "This is a win for the flatbread fans.",
      images:
        "https://thietbibuffet.vn/wp-content/uploads/2021/02/kinh-doanh-nha-hang-buffet.jpg",
    },
    {
      id: 4,
      title: "Popeyes permanently adds chicken wings to its menu",
      description: "And you can get ’em in five different flavors.",
      images:
        "https://happynuts.vn/wp-content/uploads/2023/03/Sheraton-Buffet-Restaurant.jpg",
    },
    // {
    //   id: 5,
    //   title: "Top salmon with a sizzling mix of aromatics and spices",
    //   description:
    //     "Tadka is a ubiquitous South Asian technique that adds a dramatic last-minute coat of flavor.",
    //   images:
    //     "https://noithatkendesign.vn/storage/app/media/uploaded-files/kinh-doanh-nh%C3%A0-h%C3%A0ng-buffet-3.jpg",
    // },
    // {
    //   id: 6,
    //   title: "80 Christmas dinner ideas for the ultimate holiday feast",
    //   description:
    //     "Build the perfect Christmas menu with these delicious recipes.",
    //   images:
    //     "https://sgcf.sheratonsaigon.com/resourcefiles/home-overview-image/buffettable.jpg",
    // },
    // {
    //   id: 7,
    //   title: "How to make the easiest prime rib roast for the holidays",
    //   description:
    //     "Use these tips and tricks to make a juicy and amazingly delicious prime rib roast.",
    //   images:
    //     "https://fnb.qdc.vn/pictures/catalog/tin-tuc/thang-6-8-2020/nha-hang-buffet/thiet-ke-nha-hang-buffet-01.jpg",
    // },
    // {
    //   id: 8,
    //   title: "Turn leftover turkey into a flavorful Waldorf salad",
    //   description:
    //     "This light, bright turkey salad is the best post-Thanksgiving lunch.",
    //   images:
    //     "https://thietbidungcubuffet.com/images/tin-tuc/141252019_nha-hang-buffet-hy.jpg",
    // },
  ];

  return (
    <div>
      <Header />
      <h1 className="text">New Category</h1>
      <div className="about_list">
        {newLists.map((item) => (
          <div key={item.id} className="card">
            <img src={item.images} alt="" className="about_image" />
            <div className="about_content">
              <div className="content1">
                <h2 className="about_title">{item.title}</h2>
                <p className="about_description">{item.description}</p>
              </div>
              <div
                style={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  marginTop: "auto",
                }}
              >
                <a className="a" href="#">
                  {" "}
                  {item.title}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
