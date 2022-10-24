<script lang="ts">
  const floors = [
    { name: "Floor 1", id: 1 },
    { name: "Floor 2", id: 2 },
    { name: "Floor 3", id: 3 },
  ];

  export let currentFloor: Number;

  const activateElevator = function (floorId: Number) {
    if (floorId === currentFloor) return;
    currentFloor = floorId;
    const floor: Element = document.querySelector(`#floor-${floorId}`);
    const doors: Element = document.querySelector(".doors");
    doors.style.setProperty("--door-percent", "0%");
    // alert(doors);

    const scrollAction = setTimeout(() => {
      // floor.scrollIntoView();
      location.href = `#floor-${floorId}`;
    }, 500);
    const openDoors = setTimeout(() => {
      doors.style.setProperty("--door-percent", "-100%");
    }, 1200);
  };
</script>

<div class="doors">
  <div id="left-door" />
  <div id="right-door" />
</div>
<div class="controller">
  <ul>
    {#each floors as floor, i}
      <li>
        <button
          title={`Go to floor ${floor.id}`}
          on:click={() => activateElevator(floor.id)}
        >
          {floor.name}
        </button>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  // General Styles
  button {
    background-color: var(--green-500);
    padding: 0.5ch 1ch;

    &::before {
      content: "";
      display: inline-block;
      width: 1rem;
      height: 1rem;
      margin-right: 0.5rem;
      background-color: var(--green-50);
      vertical-align: baseline;
      border-radius: 100vw;
    }
  }

  // Main Styles
  .controller {
    z-index: 1000;
    position: fixed;
    right: 0;
    background-color: var(--green-300);
    font-size: 1.125rem;

    > ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  .doors {
    --door-percent: -100%;
    z-index: 999;
    position: fixed;
    inset: 0;
    display: grid;

    > div {
      position: absolute;
      top: 0;
      width: 50vw;
      height: 100vh;
      transition: left 500ms ease-out, right 500ms ease-out;
      background-color: var(--elevator-door);
      border: 0.5rem solid var(--lightblue-900);
    }

    #left-door {
      left: var(--door-percent);
    }
    #right-door {
      right: var(--door-percent);
    }
  }
</style>
