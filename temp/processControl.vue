<template>
    <div class="pcCt"
         :class="classs"
         :style="css"
    >
        <ul>
            <li v-for="(item, index) in pc_data.process" :key="index" class="pc-item">
                <div class="pc-content">
                    <div class="pc-content-icon"
                         :class="'pc-' + item.status"
                         @click="handleClick(item, index)"
                    >
                        <i v-if="item.status !== 'error'" :class="'fa fa-' + item.icon"></i>
                        <svg v-if="item.status === 'executing'" class="pc-circle-executing" width="86" height="86">
                            <circle cx="43" cy="43" r="40"/>
                        </svg>
                        <svg v-if="item.status === 'error'" viewBox="0 0 100 100" width="64" height="64">
                            <circle r="50" cx="50" cy="50" fill="#F56C6C" />
                            <g id="triangle" transform="translate(25 20) scale(0.5)">
                                <path
                                        d="M 90 100 h -80 a 10 10 0 0 1 -10 -10 l 45 -80 a 10 10 0 0 1 10 0 l 40 70"
                                        fill="none"
                                        stroke="white"
                                        stroke-width="10"
                                        stroke-linejoin="round"
                                        stroke-linecap="round"
                                />
                                <g id="triangle__wand">
                                    <path
                                            d="M 50 32 v 37"
                                            fill="none"
                                            stroke="white"
                                            stroke-width="7"
                                            stroke-linejoin="round"
                                            stroke-linecap="round"
                                    />
                                    <circle r="4.5" cx="50" cy="82" fill="white" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div class="pc-content-des" :class="{'pc-content-des-error': item.status === 'error'}">
                        <h4>
                            {{ item.title }}
                            <!--<strong>{{ item.status === 'error' ? '(发生错误)' : ''}}</strong>-->
                            <p><i class="fa fa-user-o"></i>{{ item.name }}</p>
                        </h4>
                        <p>{{ item.des }}</p>
                    </div>
                    <div class="pc-border-base"></div>
                    <div v-if="item.status === 'complete' || item.status === 'executing' || item.status === 'error'"
                         class="pc-border-line"
                        :class="{
                            'pc-border-line-executing-1': item.status === 'executing' || item.status === 'error',
                            'pc-border-line-complete': item.status === 'complete',
                            'pc-border-line-error': item.status === 'error'
                        }">
                    </div>
                    <!--<div v-if="item.status === 'complete' || item.status === 'executing' || item.status === 'error' || item.isNowComplete"
                         class="pc-border-line"
                         :class="{
                            'pc-border-line-executing': item.status === 'executing' || item.status === 'error',
                            'pc-border-line-complete': item.status === 'complete',
                            'pc-border-line-in': item.isNowComplete && index % 2 !== 0,
                         }">
                    </div>-->
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    /* eslint-disable vue/require-valid-default-prop */

    export default {
        name: 'pcCt',

        props: {
            pc_data: {
                type: Object,
                default: {}
            },
            css: {type: Object, default: {width: '70%'}},
            classs: {type: [Array, String, Object]}
        },

        data() {
            return {

            }
        },

        methods: {
            handleClick(item, index) {
                this.$emit('click', {item, index})
            }
        }
    }
</script>

<style lang="less" scoped>
    @borderColor: #909399;
    @borderWidth: 4px;
    @r: #F56C6C;
    @c: #909399;
    @g: #67C23A;
    @b: #409EFF;
    .pc-error {
        background-color: @r !important;
    }
    .pc-undone {
        background-color: @c !important;
    }
    .pc-complete {
        background-color: @g !important;
    }
    .pc-executing {
        background-color: @b !important;
    }
    .pcCt {
        margin: 0 auto;
        ul {padding: 0}
        .pc-item {
            list-style-type: none;
            .pc-content {
                position: relative;
                width: 100%;
                > div {
                    display: inline-block;
                    vertical-align: middle;
                }
                > div + div {
                }
                .pc-content-des {
                    position: relative;
                    padding: 24px;
                    width: calc(100% - 114px);
                    text-align: left;
                    line-height: 1.4;
                    z-index: 3;
                    h4 {
                        i {
                            display: inline-block;
                            margin: 0 12px;
                        }
                        p {
                            display: inline-block;
                            vertical-align: baseline;
                            margin: 0 20px;
                            font-weight: 500;
                            color: #333;
                        }
                    }
                }
                .pc-content-des-error {
                    color: #f56c6c;
                    p {
                        color: #333;
                    }
                }
                .pc-content-icon {
                    position: relative;
                    font-size: 48px;
                    z-index: 3;
                    width: 64px;
                    border-radius: 50%;
                    background-color: #8cdece;
                    height: 64px;
                    color: white;
                    cursor: pointer;
                    svg #triangle__wand {
                        animation: ding 3.5s cubic-bezier(0.59, 0.06, 0.62, 1) infinite;
                        transform-origin: 50% 0%;
                    }
                    @keyframes ding {
                        50% {
                            transform: translate(-70%, -100%) rotate(177deg);
                            transform-origin: 50% 100%;
                        }
                        57% {
                            transform: translate(-70%, 100%) rotate(177deg);
                            transform-origin: 50% 0;
                        }
                        60% {
                            transform: translate(-65%, 100%) rotate(210deg);
                            transform-origin: 50% 0;
                        }
                        63%,
                        90% {
                            transform: translate(-70%, 100%) rotate(177deg);
                            transform-origin: 50% 0;
                        }
                    }

                    > i {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                    }
                    .pc-circle-executing {
                        margin-top: -10px;
                        left: -10px;
                        position: relative;
                        box-shadow: 0 0 14px 6px #abd0fd, inset 0 0 14px 6px #abd0fd;
                        border-radius: 50%;
                        circle {
                            fill:none;
                            stroke: #2693ff6e;
                            stroke-width: 6px;
                            stroke-dasharray: 42;
                            will-change: transform;
                            transform-origin: center;
                            animation: circleRotate 1s linear infinite;
                        }
                    }
                    @keyframes circleRotate {
                        to {
                            transform: rotate(360deg);
                        }
                    }
                }
                .pc-border-base, .pc-border-line {
                    margin: 0;
                    position: absolute;
                    width: calc(100% - 72px);
                    border-top: @borderWidth solid @borderColor;
                    border-bottom: @borderWidth solid @borderColor;
                    border-left: @borderWidth solid @borderColor;
                    border-radius: 6px 0 0 6px;
                    top: 0;
                    bottom: -@borderWidth;
                    left: 34px;
                }
                .pc-border-line {
                    z-index: 2;
                    border-color: @g;
                }
                .pc-border-line-complete {

                }
                .pc-border-line-in {
                    animation: intermediate 4s linear infinite forwards;
                }
                .pc-border-line-executing {
                    animation: executing 4s linear infinite;
                }
                .pc-border-line-executing-1 {
                    clip-path: inset(0 0 50% 0);
                }
                .pc-border-line-error {
                    /*border-color: #f56c6c;*/
                }
                @keyframes intermediate {
                    0% {
                        clip-path: polygon(0 0, 0 0, 0 0, 0 0, 0 0, 0 0);
                    }
                    34% {
                        clip-path: polygon(0 0, 0 0, 0 0, 0 0, 0 0, 0 0);
                    }
                    85% {
                        clip-path: polygon(100% 0, 100% 10%, 23% 10%, 11% 10%, 0 10%, 0 0);
                    }
                    100% {
                        clip-path: polygon(100% 0, 100% 45%, 90% 45%, 89% 11%, 0 10%, 0 0);
                    }
                }
                @keyframes executing {
                    0% {
                        clip-path: polygon(100% 0, 100% 14%, 16% 14%, @borderWidth 50%, 0 50%, 0 0);
                    }
                    10% {
                        clip-path: polygon(100% 0, 100% 14%, 16% 14%, @borderWidth 100%, 0 100%, 0 0);
                    }
                    40% {
                        clip-path: polygon(100% 0, 100% 14%, 100% 41%, 100% 100%, 0 100%, 0 0);
                    }
                    100% {
                        clip-path: polygon(100% 0, 100% 14%, 100% 41%, 100% 100%, 0 100%, 0 0);
                    }
                }
            }

        }
        .pc-item:nth-child(n) .pc-content{
            float: left;
            text-align: left;
        }
        .pc-item:nth-child(2n) .pc-content{
            float: right;
            text-align: right;
            direction: rtl;
            .pc-border-base, .pc-border-line {
                border-left: none;
                border-right: @borderWidth solid @borderColor;
                border-radius: 0 6px 6px 0;
                left: 38px;
            }
            .pc-border-line {
                border-right-color: @g;
            }
            .pc-content-icon {
                .pc-circle-executing {
                    left: 10px;
                }
            }
            .pc-content-des {
                text-align: right;
                p {
                    direction: ltr;
                }
            }
        }
        .pc-item:first-child .pc-content {
            .pc-content-des {
                h4 {
                    margin-top: 0;
                }
            }
            .pc-content-icon {
                vertical-align: top;
            }
            .pc-border-base, .pc-border-line {
                clip-path: inset(6px 0 -1px 0);
            }
            .pc-border-line-executing-1 {
                clip-path: inset(100% 100% 0 0);
            }
            .pc-border-line-error {
                clip-path: inset(100% 100% 0 0);
            }
        }

        .pc-item:last-child .pc-content {
            .pc-content-icon {
                vertical-align: bottom;
            }
            .pc-border-base, .pc-border-line {
                clip-path: inset(0 -1px 6px 0);
            }
            .pc-border-line-complete {
                clip-path: inset(0 0 6px 0) !important;
            }
        }

        .pc-item:before,
        .pc-item:after {
            content: '';
            display: block;
            width: 100%;
            clear: both;
        }
    }
</style>
