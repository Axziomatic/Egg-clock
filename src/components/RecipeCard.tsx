export default function RecipeCard() {
  return (
    <div className="flex flex-col flex-1 justify-center bg-yellow-100 m-2">
      <article>
        <h2 className="text-2xl px-2 py-1">Scrambled eggs</h2>
        <p className="text-lg px-2 py-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          reprehenderit aperiam, ipsum voluptate eveniet aspernatur? Cupiditate,
          quis ullam consequuntur quisquam excepturi illo incidunt eveniet
          soluta harum. Cum natus facilis quod.
        </p>
        <img
          src="/images/scrambled.jpg"
          className="w-full max-w-md mx-auto my-2"
        ></img>
        <p className="text-lg px-2 py-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempora
          nisi expedita voluptates nam dolorem magnam doloribus earum eveniet
          ducimus obcaecati porro dolores, illum aliquid repellat itaque at
          possimus sit.
        </p>
        <button className="text-4xl hover:cursor-auto">
          <span>🤍</span>
        </button>
      </article>
    </div>
  );
}
