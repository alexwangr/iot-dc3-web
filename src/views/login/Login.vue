<!--
  - Copyright 2022 Pnoker All Rights Reserved
  -
  - Licensed under the Apache License, Version 2.0 (the "License");
  - you may not use this file except in compliance with the License.
  - You may obtain a copy of the License at
  -
  -      https://www.apache.org/licenses/LICENSE-2.0
  -
  - Unless required by applicable law or agreed to in writing, software
  - distributed under the License is distributed on an "AS IS" BASIS,
  - WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  - See the License for the specific language governing permissions and
  - limitations under the License.
  -->

<template>
    <div class="login-container">
        <div class="login-wrapper-left animated bounceInDown">
            <div class="login-left">
                <img class="img" src="images/logo/logo-white.png" />
            </div>
        </div>
        <particles />
        <div class="login-wrapper-right animated bounceInDown">
            <div class="login-border">
                <div class="login-main">
                    <h4 class="login-title">DC3 IoT 平台</h4>
                    <el-form
                        ref="formDataRef"
                        class="login-form"
                        status-icon
                        :rules="formRule"
                        :model="reactiveData.formData"
                    >
                        <el-form-item prop="tenant">
                            <el-input
                                v-model="reactiveData.formData.tenant"
                                :prefix-icon="Box"
                                placeholder="请输入租户名"
                                auto-complete="off"
                                @keyup.enter="handleLogin"
                            ></el-input>
                        </el-form-item>
                        <el-form-item prop="name">
                            <el-input
                                v-model="reactiveData.formData.name"
                                :prefix-icon="User"
                                placeholder="请输入用户名"
                                auto-complete="off"
                                @keyup.enter="handleLogin"
                            ></el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input
                                v-model="reactiveData.formData.password"
                                :prefix-icon="Lock"
                                :type="reactiveData.passwordType"
                                placeholder="请输入密码"
                                auto-complete="off"
                                @keyup.enter="handleLogin"
                            >
                                <template #append>
                                    <el-button :icon="reactiveData.isHide" @click="showPassword" />
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button class="login-submit" type="primary" @click.prevent="handleLogin"
                                >登录
                            </el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./index.ts" lang="ts" />

<style lang="less">
@import '~@/views/login/style.less';
</style>
