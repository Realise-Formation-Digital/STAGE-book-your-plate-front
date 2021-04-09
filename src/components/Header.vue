<template>
  <header
    class="v-sheet theme--light v-toolbar v-toolbar--flat v-app-bar v-app-bar--fixed white"
    data-booted="true"
    style="
      height: 64px;
      margin-top: 0px;
      transform: translateY(0px);
      left: 0px;
      right: 0px;
    "
  >
    <div class="v-toolbar__content" style="height: 64px">
      <div class="container py-0 fill-height">
        <div
          class="v-avatar mr-10 grey darken-1"
          style="height: 32px; min-width: 32px; width: 32px"
        ></div>
        <button
          type="button"
          class="v-btn v-btn--text theme--light v-size--default"
        >
          <span class="v-btn__content"> Dashboard </span></button
        ><button
          type="button"
          class="v-btn v-btn--text theme--light v-size--default"
        >
          <span class="v-btn__content"> Messages </span></button
        ><button
          type="button"
          class="v-btn v-btn--text theme--light v-size--default"
        >
          <span class="v-btn__content"> Profile </span></button
        ><button
          type="button"
          class="v-btn v-btn--text theme--light v-size--default"
        >
          <span class="v-btn__content"> Updates </span>
        </button>
        <div class="spacer"></div>
        <div class="v-responsive" style="max-width: 260px">
          <div class="v-responsive__content">
            <div
              class="v-input v-input--hide-details v-input--dense theme--light v-text-field v-text-field--single-line v-text-field--solo v-text-field--solo-inverted v-text-field--solo-flat v-text-field--is-booted v-text-field--enclosed v-text-field--rounded"
            >
              <div class="v-input__control">
                <div class="v-input__slot">
                  <div class="v-text-field__slot">
                    <input id="input-23" type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>