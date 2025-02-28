export interface Photo {
  id: string;
  url: string;
  description: string;
  instructions: string;
}

export const mockedPhotos: Photo[] = [
  {
    id: "1",
    url: "/public/images/scrambled.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula faucibus massa quis maximus. Nunc lacinia dolor ac neque sodales, lacinia sodales diam imperdiet. Nunc placerat gravida sapien non commodo. Vivamus ultrices sapien sed metus tempor varius. Pellentesque cursus non ipsum id tempor. Vestibulum tempor, nunc id elementum vestibulum, arcu eros pulvinar velit, non lobortis enim velit quis justo. Ut venenatis pulvinar ornare. Aenean mollis imperdiet felis, et molestie ipsum feugiat id. Nullam tincidunt molestie ex vitae placerat. Aliquam nisi ligula, posuere id sodales eget, pellentesque vel nibh. In hac habitasse platea dictumst. Duis venenatis metus massa, eu pulvinar sem blandit eu. Suspendisse sit amet justo egestas, commodo neque ut, mollis libero.",
    instructions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula faucibus massa quis maximus. Nunc lacinia dolor ac neque sodales, lacinia sodales diam imperdiet. Nunc placerat gravida sapien non commodo. Vivamus ultrices sapien sed metus tempor varius. Pellentesque cursus non ipsum id tempor. Vestibulum tempor, nunc id elementum vestibulum, arcu eros pulvinar velit, non lobortis enim velit quis justo. Ut venenatis pulvinar ornare. Aenean mollis imperdiet felis, et molestie ipsum feugiat id. Nullam tincidunt molestie ex vitae placerat. Aliquam nisi ligula, posuere id sodales eget, pellentesque vel nibh. In hac habitasse platea dictumst. Duis venenatis metus massa, eu pulvinar sem blandit eu. Suspendisse sit amet justo egestas, commodo neque ut, mollis libero.",
  },
  {
    id: "2",
    url: "https://images.pexels.com/photos/30833932/pexels-photo-30833932/free-photo-of-tranquil-forest-pathway-in-late-autumn.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: "3",
    url: "https://images.pexels.com/photos/18012037/pexels-photo-18012037/free-photo-of-yellow-residential-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: "4",
    url: "https://images.pexels.com/photos/30739946/pexels-photo-30739946/free-photo-of-young-basketball-player-holding-ball-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: "5",
    url: "https://images.pexels.com/photos/30722200/pexels-photo-30722200/free-photo-of-cat-resting-on-circular-window-ledge-sunlit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];
