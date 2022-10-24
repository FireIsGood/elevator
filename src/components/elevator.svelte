<script lang="ts">
  const floors = [
    { name: "Home", id: 1 },
    { name: "About", id: 2 },
    { name: "Contact", id: 3 },
  ];

  let doorTimer;

  const activateElevator = function (floorId: Number, e: Event) {
    const floor: Element = document.querySelector(`#floor-${floorId}`);
    const doors: Element = document.querySelector(".doors");

    // Close doors
    doors.style.setProperty("--door-percent", "0%");

    // Add active to button
    e.path[0].classList.add("active");

    // Scroll to target
    const scrollAction = setTimeout(() => {
      location.href = `#floor-${floorId}`;
    }, 500);

    // Deactivate buttons after 1.2 seconds
    setTimeout(() => e.path[0].classList.remove("active"), 1200);

    // Keep door closed if still navigating
    if (doorTimer) clearTimeout(doorTimer);
    doorTimer = setTimeout(() => {
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
          on:click={(e) => activateElevator(floor.id, e)}
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
    padding: 0.5ch;
    width: 100%;
    text-align: left;
    border-radius: 0.5rem;

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

    &:global(.active) {
      background-color: var(--green-400);

      &::before {
        background-color: white;
      }
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
      gap: 0.5rem;
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
