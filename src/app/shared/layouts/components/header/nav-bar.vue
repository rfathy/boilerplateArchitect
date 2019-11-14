<template>
  <div>
    <nav class="horizontal-navbar nav navbar pb-0 pt-0" aria-label="horizontal-navbar">
      <button id="toggle-horizontal-menu" class="btn border-right btn-sm" @click="toggleMenu()">
        <img src="@/assets/svg/register-new.svg" alt="Toggle Menu Icon" />
      </button>
      <nav aria-label="breadcrumb" class="mr-auto ml-2">
        <ol class="breadcrumb bg-transparent pb-0 pt-0">
          <li class="breadcrumb-item">
            <a href="javascript:;">
              <img src="@/assets/svg/register-new.svg" alt="Toggle Menu Icon" />
            </a>
          </li>
          <li class="breadcrumb-item">
            <a href="javascript:;">Doctor Desktop</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>
      <div class="horizontal-navbar-menu" v-if="isVisible">
        <div class="container-fluid m-1">
          <div class="wrapper">
            <ul class="nav nav-tabs list" id="myTab">
              <li class="mr-1" @click="toggleItem(this)">
                <a href="javascript:;">
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/team-1/160/management-512.png"
                    alt="test icon"
                  />
                </a>
                <div class="container-fluid p-1 position-absolute bg-info hide manu-item-container" style="left: 0;">
                  <div class="row">
                    <div class="col-md-4">
                      <a class="dropdown-item" href="javascript:;">link 1</a>
                      <a class="dropdown-item" href="javascript:;">link 2</a>
                      <a class="dropdown-item" href="javascript:;">link 3</a>
                      <a class="dropdown-item" href="javascript:;">link 4</a>
                      <a class="dropdown-item" href="javascript:;">link 5</a>
                      <a class="dropdown-item" href="javascript:;">link 6</a>
                    </div>
                    <div class="col-md-4">
                      <a class="dropdown-item" href="javascript:;">link 7</a>
                      <a class="dropdown-item" href="javascript:;">link 8</a>
                      <a class="dropdown-item" href="javascript:;">link 9</a>
                      <a class="dropdown-item" href="javascript:;">link 10</a>
                      <a class="dropdown-item" href="javascript:;">link 11</a>
                      <a class="dropdown-item" href="javascript:;">link 12</a>
                    </div>
                    <div class="col-md-4">
                      <a class="dropdown-item" href="javascript:;">link 14</a>
                      <a class="dropdown-item" href="javascript:;">link 15</a>
                      <a class="dropdown-item" href="javascript:;">link 16</a>
                      <a class="dropdown-item" href="javascript:;">link 17</a>
                      <a class="dropdown-item" href="javascript:;">link 18</a>
                      <a class="dropdown-item" href="javascript:;">link 19</a>
                      <a class="dropdown-item" href="javascript:;">link 20</a>
                    </div>
                  </div>
                </div>
              </li>
              <li class="mr-1">
                <a href="javascript:;">
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/team-1/160/management-512.png"
                    alt="test icon"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script src="./nav-bar.js"></script>
<style lang="scss" scoped>
@import "./theme/header.scss";
</style>