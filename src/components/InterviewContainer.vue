<template>
  <section>
    <div>
      <div class="interviewInfo">
        This interview has been conducted between SOL and Hyungjoong Kim for
        <span
          class="seeClip"
          @click="openShowcase()"
          @mouseover="clipHover = true"
          @mouseleave="clipHover = false"
          :class="{ hover: clipHover }"
          >a showcase </span
        >at Louis Poulsen Seongsu.
        <span
          class="seeClip"
          @click="openMovie()"
          @mouseover="hover = true"
          @mouseleave="hover = false"
          :class="{ hover: hover }"
          >See full interview as
          <span>a movie <font-awesome-icon icon="arrow-right"/></span></span
        ><br />
        See full interview as a text <font-awesome-icon icon="arrow-down" />
      </div>

      <interview
        v-for="i in interview"
        :key="i.id"
        :qen="i.qen"
        :qkr="i.qkr"
        :aen="i.aen"
        :akr="i.akr"
      ></interview>
    </div>
  </section>
</template>

<script>
import Interview from "./Interview.vue";
export default {
  components: {
    Interview,
  },
  methods: {
    openMovie() {
      window.open("https://youtu.be/p63mZUTVtIA", "_blank");
    },
    openShowcase() {
      window.open(
        "https://solmagazine.net/en/pages/hyungjoong-kim-at-louis-poulsen-seongsu",
        "_blank"
      );
    },
  },

  data() {
    return {
      interview: [
        {
          qen:
            "Your past work, 'A Printer' served as the basis of this project. How did it come to be?",
          qkr:
            "이번 프로젝트의 모태가 되었던 A Printer를 소개해달라. 이는 어떻게 탄생하게 되었나?",
          aen:
            "As I’ve continued my practice, I’ve thought of myself as a media artist - and still do. But what I wish to discuss through my works is not about technology or media. It is still not easy to clearly address what I want to speak through my creative process, and I don’t even want to know what exactly it is, to be honest.  In my case, most of my creative works have been initiated by the thought, ‘what the hell am I doing here, why an earth am I thinking like this’. In other words, why do I exist and where do all these complicated thoughts and ideas come from. Even though it is not possible to get a clear answer, this chain of thought makes me realize that I, myself, have been generated by the entire process of continuous feedback loop of all the sensations, experiences and thoughts I have ever had in every single moment from the past. Indeed my thoughts and idea are continuously circulating in this current moment,’ I’ am also constantly being generated within this circulation process. To me, these chaotic and space-time dynamic visuals of a video feedback, which are generated by routing outputs back as inputs between a camera and a display symbolize the world of constant creation. I want to play with and within this world. I want to generate more dynamic visual forms and patterns. Therefore I came up with an idea of automating the factors which affect the visual dynamics, such as camera angle, movement, speed and focus of the lens. That’s how this project started.",
          akr:
            "나는 미디어 아트라는 하나의 예술 분야에 몸을 담고 있다고 생각한다. 하지만 내가 작업을 통해 이야기하고자 하는 부분은, 기술에 대한 것이 아니었던 것 같다. 나는 아직 창작을 통해 무엇을 이야기하고 싶은 것인지 정확히 말로 설명할 수 없고 내 스스로도 그것이 무엇인지도 정확히 알고 싶지도 않다. 나의 경우에는 ‘난 지금 여기서 뭐하고 있는 걸까, 왜 이런 생각을 하고 있는 걸까’ 라는 생각에서 대부분의 창작활동이 시작되는 것 같다. 조금 어려운 말로 표현하면, ‘나는 왜 존재하며 이 복잡한 생각과 관념들은 어디에서부터 왔는가’ 일 것이다. 이 쓸데없는 생각의 꼬리를 물고가다보면, 비록 내가 왜 여기있는지에 대한 이유는 알수 없지만 나라는 존재는 태어나서 지금까지 매 순간 경험한 감각과 사고가 외부로부터 나에게 끊임없이 들어오고 나가는 과정속에서 이루어져왔다는 것이다. 지금 이 순간에도 나의 사고와 생각들은 멈추지 않고 순환하고 있으며 이 순환의 과정에서 새로운 나의 존재가 계속해서 생성되고 있는 것이다. 나에게 있어서 비디오 피드백, 즉 카메라의 입력과 출력의 무한한 교차로 인해 생성되는 카오스적, 시공역학적 형태는 끊임없는 생성이 이루어지는 세계를 상징한다. 나는 이러한 세계를 가지고 놀고 싶었다. 시각적으로 다양한 형태를 생성해보고 싶었다. 그래서 비디오 피드백의 패턴과 형태를 생성하는데에 영향을 주는 요소들인, 카메라의 각도, 움직임, 속도, 렌즈 초점등을 기계로 자동화시키는 키네틱 작업을 생각하게 되었고 그것이 'A Printer'를 시작하게 된 동기였다.",
        },
        {
          qen:
            "The video feedback effect has been explored since video cameras and displays were invented back in 1960. What brought you to focus on this phenomenon?",
          qkr:
            "비디오 피드백 현상은 영상기록장치와 모니터(텔레비전)가 발명된 후 1960년대부터 현재까지 지속적으로 탐구되어왔다. 카메라와 모니터가 주고받는 신호들간에 발생하는 오차에서 나오는 이 현상에 주목한 이유가 있었나?",
          aen:
            "Video feedback loops were probably discovered long ago along with the spread of video cameras. I’m not sure if it is still a subject or scientific or technological research, but I still think the visual effects of video feedback continue to intrigue people, myself included. Watching the creation and extinction of the continuous patterns in the passage of time, I feel as if I am meditating. One of the key concepts that I think is important here is ‘chaos’. This continuous generated visualization cannot be described by any algorithms. I would say, it represents a chaotic status. There visuals are constantly generated by movement of camera, distance between camera and display and focus adjustment. Even though it is impossible to predict the next frames, it is fascinating to see this process of creation and extinction. In it, I see the cycle of the universe.",
          akr:
            "비디오 피드백은 어떻게 보면 비디오 카메라가 나왔을 때부터 누군가에 의해 발견되었을 것이다. 지금까지 이것이 과학적 혹은 기술적 탐구대상인지에 대해서는 잘 모르겠지만, 이 비디오 피드백 현상으로 인해 생성되는 비주얼에는 여전히 수많은 사람들이 매료된다. 나 역시도 그러하다. 작은 움직임이 물결처럼 퍼지면서 만들어내는 연속적인 패턴의 생성과 소멸이 이루어지는 것을 보고 있으면 마치 명상하는 듯한 기분이 든다. 비디오 피드백 현상에서 내가 중요하게 생각하는 부분은 카오스이다. 연속적으로 생성되는 화면은 어떤 알고리즘으로 설명할 수 없다. 이는 카오스의 상태로 이야기할 수 있을 것이다. 비디오 피드백의 비주얼은 카메라, 디스플레이의 거리, 움직임의 속도, 주변의 환경, 그리고 렌즈의 초점 변화에 의해 끊임없이 변하게 된다. 하지만 이렇게 예측 불가능한 카오스 상태임에도 불구하고 무언가가 끊임없이 생겨나고 사라지는 과정을 바라보는 것이 너무 매혹적이다. 마치 우주의 생성과 소멸로도 이야기할 수 있을 것이다.",
        },
        {
          qen:
            "Like your past works, this project utilizes digital technology and machines. But previous projects seemed focused on showing the whole ‘process’, while this time you’ve produced a series of finished visual ‘outcomes’. Has this affected how you worked?",
          qkr:
            "이번 작업은 전 작품들처럼 디지털 기술과 기계를 활용하지만 기존에는 다양한 기계와 기술들의 ‘과정’을 보여주는 듯 했다면, 이번에는 이를 토대로 하나의 완성된 ‘시각물’을 선보였다. 작업하는 데에 있어서 이 차이가 큰 영향을 끼쳤는가?",
          aen:
            "I try to refrain from creating any ‘complete’ visual artworks, but always end up doing so. Because in the end, I need to show my works in an observable manner of exhibitions. As my earlier works are kinetic machines, video works, etc, it may seem like they are showing ‘process’ - but for me, they were all each complete outcome. It is always difficult to express my intentions in one outcome. I don’t think any single work can fully embody all that I’m trying to convey. It was the same for this project as well. A single printed image cannot express the entirety of my thoughts. But as I didn’t have to worry about technical specifications and machinery, I was actually able to focus more on letting my thoughts roam free - which was a very liberating experience. This is why I named it as drawings.",
          akr:
            "나는 하나의 완성된 시각 결과물을 만드는 작업을 최대한 피하고 싶지만, 동시에 그러한 작업을 하고 있는 모순 속에서 작업을 하고 있다. 어찌됐든 작품을 보여주고, 전시를 할 때에는 완성된 실체를 보여주어야하기 때문이다. 기존 작업들이 움직이는 기계, 영상이었기에 과정을 보여준다고 생각할 수도 있지만 나에게는 그 모든 작업 역시 하나의 완성된 결과물이었다. 이렇게 나의 생각들, 내가 표현하고자하는 것들을 하나의 결과물로 만드는 것은 정말 힘들다. 그 결과물 하나가, 내가 말하고자 하는 것을 모두 표현할 수 있다고 생각하지 않는다. 이번 작업도 그러하다. 하나의 형태로 프린트된 작품이, 내가 말하고자 하는 바를 모두 표현할 수는 없을 것이다. 하지만 오히려 완벽하게 구동을 해야하는 기계를 만들기 위해 기술적인 문제들을 해결하는 것에 시간을 허비하지 않고, 내 생각을 뻗어나아가게 내버려둔 상태에서 나온 작업이라는 것이 너무나 마음에 든다. 내가 이름을 드로잉이라고 지은 것도 이 때문이다.",
        },
        {
          qen:
            "The images that formed are caused by the exchange of signals between camera and monitor. And yet to the human eye, the shapes resemble objects of nature such as a flower, a Nautilus shell, and human silhouettes. Was this illusion intentional?",
          qkr:
            "이번 작품들은 카메라와 모니터라는 두 기계가 서로 주고받는 신호에 의해 자동으로 발생하는 형태들로 이루어져있다. 그럼에도 불구하고 꽃,조개 껍질, 인간의 실루엣 등 자연물이 보이는 것처럼 느껴지기도 한다. 이는 의도한 것인가?",
          aen:
            "Though I didn’t intend to see these shapes, the self-similar patterns are inevitably reminiscent of natural objects and patterns. As video feedback is a series of geometric shapes caused by infinitely repeating input and output, the shapes they form are similar to those in nature. I quite liked how these machine-generated geometric shapes were simultaneously very organic in form. What’s interesting is that we don’t actually fully comprehend just why a leaf, a shell, or the skin of an animal shows the patterns it has. It’s the same with this work. Watching the ever-changing shapes on screen, just why these particular patterns form is reliant on the factors preceding it - which are in turn shaped by their predecessors. These can be elements like lighting, angle and distance, movement, and the focus of the lens when this is applied to the natural world. The list goes on indefinitely. For example, if one were to ponder just why the wrinkles on an elephant’s hide formed the way they did, the story would extend eons backwards, to the changing climate of the last millions of years, the cosmic movement of our planet, the interchange of DNA between different organisms, and so on. With these thoughts, I’m reminded of the fact that I’m yet another being in the vast stream of time. This project is a drawing of sorts, where I filmed the video feedback loop and selected a number of frames from it to turn into prints. But as for which of these frames would be turned into paintings and exhibited, I left it to the discretion of SOL. At least for this project, I didn’t want to set an visual aesthetic standard. I now feel that beauty is an endless cycle of creation, and art should the occasional byproduct of it.",
          akr:
            "내가 굳이 의도하지 않아도 자기 동일성의 패턴은 자연의 패턴과 유사한 형태를 띨 수 밖에 없다. 비디오 피드백 역시 출력을 다시 입력으로 맞물려서 생겨나는 순환의 과정이기에 자연과 유사한 형태와 패턴이 보이는 것 같다. 의도하진 않았지만 이렇게 기하학적이고 동시에 유기적인 패턴을 형성하는 점이 마음에 든다. 재미있는 것은 우리는 나뭇잎, 조개 껍질 혹은 동물의 피부 패턴들이 어떻게 생겨나게 된건지 왜 그러한 형태를 띠고 있는 것인지 여전히 모른다는 것이다. 이 드로잉 역시 마찬가지이다. 끊임없이 생성되는 화면 속에서 보이는 패턴이 왜 생겨났는지에 대한 답은, 그것이 형성되어온 시간에 의존한다. 그리고 그 시간은 또 지나온 시간에 의존한다. 지나온 시간들에 영향을 미치는 요인은, 비디오 피드백 세계 내에서는 주변의 조명, 카메라의 각도, 움직임, 속도 혹은 렌즈 초점 등이 있을 것이다. 하지만 실제 자연세계에서는 어떠한가. 예를 들어 코끼리 피부의 주름이 왜 그렇게 생겼는지에 대해 이야기를 해보면 끝이 없을 것이다. 수십억년동안 변화한 기후, 지구의 움직임, 다른 개체들간의 교류, DNA등 수많은 요소들로 인해 생성되고 변화된 결과들일 것이다. 이런 생각을 할때면, 나 역시도 그렇게 시간 속에서 흘러가고 있는 존재라는 것을 느낀다. 이 작업은 비디오 피드백 루프를 직접 촬영하고, 그 중 몇개의 프레임을 선택하여 프린트한 일종의 드로잉 작업이다. 하지만 나는 어떠한 드로잉(프레임)을 프린트하고 전시할 것인지에 대해서는 전혀 관여하지 않았다. 적어도 이번 작업에서는 무엇이 시각적으로 보기 좋고 좋지 않은지에 대한 기준을 정하고 싶지 않았다. 이제 나에게 있어서 아름다움이란 끊임없이 무언가가 생성되고 순환하는 과정이며 예술 작품은 그 과정안에서 툭툭 떨어져나와야 한다는 생각이 든다.",
        },
        {
          qen:
            "You’ve transitioned from working with digital media and machinery to creating a physical print of an image. Is there a difference between viewing art in the form of a physical object compared to a digital (virtual) form?",
          qkr:
            "디지털미디어와 기계장치들로 이루어진 작품들을 주로 선보이다가 이미지를 프린트 형태로 제작하게 되었는데, 여전히 예술을 디지털 형태로 보는 것과 만질 수 있는 실체로써 보는 것의 차이가 있다고 생각하는가?",
          aen:
            "I enjoy these types of abstract discussion on art. Generally, I believe that art has intrinsic value as a concept, regardless of form. Art that expands boundaries is paramount - whether it can be touched or not is irrelevant. Many great artist have achieved this, and continue to do so. In a post-pandemic age when physical exhibitions have been abruptly brought to an end, I believe all artists felt a certain amount of panic. Especially more so for those practicing conventional mediums. This was also the case here in Germany. But even in such times, artists are overcoming physical limitations and expanding their own practices. A painter who’s only ever used paint working in VR, a sculptor recording the sound of his chisel to create a digital audio exhibit, and so on. They are playing with senses they haven’t utilized before. I personally like this movement.",
          akr:
            "나는 바로 지금 질문해준, 실체가 없는 예술에 대한 논의가 좋다. 나는 기본적으로 예술은 개념으로써도 충분히 가치가 있다고 생각한다. 그것이 만져질 수 있든 없든 간에 예술의 개념을 확장시킬 수 있는 것이 최고의 예술이라고 생각한다. 이미 많은 훌륭한 예술가들이 그렇게 예술의 개념을 확장시켜왔다. 이것은 지금도 계속되고 있다. 코로나로 물리적인 전시가 강제적으로 스탑되어버린 상황에서 모든 예술가들은 어느정도 패닉을 느꼈을 것이라 생각한다. 특히 전통적인 예술을 하는 사람들에게 말이다. 이곳 독일도 마찬가지이다. 하지만 이런 상황에서도, 예술가들은 물리적인 것에 구애받지 않고 이 상황을 돌파하며 계속해서 자신의 세계를 확장시키고 있다. 평생 물감만을 사용해온 사람이 VR작업을 한다던가 조각만 해왔던 사람이 디지털 사운드 전시를 한다던가와 같이 말이다. 사용하지 않았던 다른 감각들을 가지고 놀고 있는 것이다. 나는 이러한 움직임이 좋다.",
        },
        {
          qen:
            "Then has these explorations into the root of your thoughts brought you any closer to the answer?",
          qkr:
            "그렇다면 지금까지 작품활동을 통해 ‘나의 근원에 대한’ 해답에 조금은 가까워졌다고 생각하나?",
          aen:
            "Answering this question was never my explicit goal. But it was the biggest motivation behind my works. The more I explore such thoughts through my creative endeavors, the less I believe that there will ever be an answer. Rather, I find myself viewing my wandering from a step back, and realising that while there isn’t one definite answer, the process itself hold infinite possibilities.",
          akr:
            "그 질문에 대한 해답을 찾기 위한 목적으로 작품을 활동을 하고 있지는 않았던 것 같다. 하지만 그러한 생각이 내가 창작활동을 시작하는데에 있어서 가장 큰 동기였음에는 분명하다는 생각이 든다. 어떻게든 계속해서 작업을 해오면서 스스로 느끼는 점은, 이 근원에 대한 해답이 어딘가 있을 것이라고 생각하지 않게 되는 것이다. 오히려 내 자신을 한발자국 떨어져서 보게되고, 그렇게 봄으로써 그 해답은 한가지가 아니라 그 안에 무한한 가능성을 지니고 있는 것으로 생각이 든다.",
        },
      ],
      clipHover: false,
      hover: false,
    };
  },
};
</script>

<style scoped>
section {
  width: 100%;
  background-color: black;
  color: white;
  overflow: hidden;

  position: relative;
}

.interviewInfo {
  font-family: "Montserrat Subrayada", sans-serif;
  letter-spacing: -3px;
  font-size: 4.5em;
  /* border-bottom: 1px solid white; */
  position: relative;
  left: 80px;
  width: calc(100% - 80px);
  /* padding: 0.5em 0; */
  line-height: 1.3em;
  padding: 4em 0 0.5em 0;
  /* line */
}

.seeClip {
  color: #9e00ff;
  cursor: pointer;
}

.seeShowcase {
  color: red;
  cursor: pointer;
}

.hover {
  color: #ff008a;
}

@media only screen and (max-width: 768px) {
  .interviewInfo {
    font-size: 2em;
    left: 0px;
    width: 100%;
  }
}
</style>
